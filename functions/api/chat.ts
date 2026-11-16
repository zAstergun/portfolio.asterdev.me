// ─── Cloudflare Pages Function: /api/chat ─────────────────────────────────────
// Proxy seguro no servidor Edge da Cloudflare para o Google Gemini.
// A chave GEMINI_API_KEY fica oculta no servidor da Cloudflare e NUNCA é enviada ao cliente.

interface Env {
  GEMINI_API_KEY?: string;
}

interface ChatRequestBody {
  userMessage: string;
  history?: Array<{ role: "user" | "model"; text: string }>;
  currentLang?: string;
}

const CANDIDATE_MODELS = [
  "gemini-flash-lite-latest",
  "gemini-3.1-flash-lite",
  "gemini-3.5-flash-lite",
  "gemini-3.5-flash",
  "gemini-flash-latest",
];

const ASTER_SYSTEM_INSTRUCTION = `Você é o AsterBot, o assistente oficial e alter-ego de inteligência artificial do portfólio de Douglas Luiz (conhecido como Aster ou Astergun), desenvolvedor mobile e de software.
Responda de forma prestativa, concisa, técnica e autêntica.
Destaque projetos do Aster como StudioOS (plataforma para criadores de vídeo), Soul Fighter Memory Game (jogo de cartas e memória) e Ideal Calculator (calculadora demográfica).`;

export async function onRequestPost(context: { request: Request; env: Env }): Promise<Response> {
  const { request, env } = context;

  const apiKey = (env.GEMINI_API_KEY || "").trim();
  if (!apiKey) {
    return new Response(
      JSON.stringify({
        error: "GEMINI_API_KEY não configurada no servidor Cloudflare.",
        fallback: true,
      }),
      {
        status: 503,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  let body: ChatRequestBody;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Corpo da requisição inválido" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { userMessage, history = [], currentLang = "br" } = body;
  if (!userMessage || typeof userMessage !== "string" || !userMessage.trim()) {
    return new Response(JSON.stringify({ error: "Mensagem vazia" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const contents = [
    ...history.slice(-6).map((h) => ({
      role: h.role === "user" ? "user" : "model",
      parts: [{ text: h.text }],
    })),
    {
      role: "user",
      parts: [{ text: userMessage.trim() }],
    },
  ];

  for (const model of CANDIDATE_MODELS) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const geminiRes = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text: `${ASTER_SYSTEM_INSTRUCTION}\n\nIdioma da interface: "${currentLang}". Responda no idioma do usuário.`,
              },
            ],
          },
          contents,
          generationConfig: {
            temperature: 0.35,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 800,
          },
        }),
      });

      if (!geminiRes.ok) {
        continue;
      }

      const data = (await geminiRes.json()) as any;
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (generatedText && generatedText.trim()) {
        return new Response(
          JSON.stringify({
            text: generatedText.trim(),
            source: "gemini",
            modelUsed: model,
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-store",
            },
          }
        );
      }
    } catch {
      // Tenta o próximo modelo
    }
  }

  return new Response(
    JSON.stringify({
      error: "Falha temporária ao consultar modelos Gemini",
      fallback: true,
    }),
    {
      status: 502,
      headers: { "Content-Type": "application/json" },
    }
  );
}
