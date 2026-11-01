import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const apiKey = env.VITE_GEMINI_API_KEY || env.GEMINI_API_KEY || "";

  return {
    plugins: [react()],
    define: {
      // Bridges both GEMINI_API_KEY and VITE_GEMINI_API_KEY from Cloudflare / CI environments
      "import.meta.env.VITE_GEMINI_API_KEY": JSON.stringify(apiKey),
    },
  };
});

