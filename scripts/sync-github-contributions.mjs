/**
 * scripts/sync-github-contributions.mjs
 * 
 * Fetches real GitHub contributions and profile metrics for zAstergun.
 * Supports:
 *   1. GitHub GraphQL API (when GITHUB_TOKEN is available, e.g. in GitHub Actions)
 *   2. Public contributions API + GitHub REST API fallback (for local execution)
 * 
 * Outputs: src/data/githubContributions.json
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const USERNAME = process.env.GITHUB_USERNAME || "zAstergun";
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";
const OUTPUT_PATH = resolve(__dirname, "../src/data/githubContributions.json");

const LEVEL_MAP = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

function calculateStreaks(days) {
  // Sort by date ascending
  const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));

  let longestStreak = 0;
  let tempStreak = 0;

  for (const day of sorted) {
    if (day.count > 0) {
      tempStreak += 1;
      if (tempStreak > longestStreak) longestStreak = tempStreak;
    } else {
      tempStreak = 0;
    }
  }

  // Current streak (working backwards from last day)
  let currentStreak = 0;
  for (let i = sorted.length - 1; i >= 0; i--) {
    const day = sorted[i];
    // If last day has 0 commits, check if today is still in progress (allow streak if yesterday had commits)
    if (i === sorted.length - 1 && day.count === 0) {
      continue;
    }
    if (day.count > 0) {
      currentStreak += 1;
    } else {
      break;
    }
  }

  return { currentStreak, longestStreak };
}

async function fetchViaGraphQL(username, token) {
  const query = `
    query($login: String!) {
      user(login: $login) {
        name
        login
        avatarUrl
        followers { totalCount }
        repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
          totalCount
        }
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "asterdev-sync-script",
    },
    body: JSON.stringify({ query, variables: { login: username } }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.status} ${response.statusText}`);
  }

  const json = await response.json();
  if (json.errors && json.errors.length > 0) {
    throw new Error(`GraphQL errors: ${json.errors.map((e) => e.message).join(", ")}`);
  }

  const user = json.data?.user;
  if (!user) throw new Error(`User ${username} not found via GraphQL`);

  const calendar = user.contributionsCollection?.contributionCalendar;
  const rawWeeks = calendar?.weeks || [];

  const allDays = [];
  const weeks = rawWeeks.map((week) => {
    return week.contributionDays.map((d) => {
      const level = LEVEL_MAP[d.contributionLevel] ?? 0;
      const dayObj = {
        date: d.date,
        count: d.contributionCount,
        level,
      };
      allDays.push(dayObj);
      return dayObj;
    });
  });

  const { currentStreak, longestStreak } = calculateStreaks(allDays);

  return {
    updatedAt: new Date().toISOString(),
    username: user.login,
    name: user.name || "Douglas Luiz",
    avatarUrl: user.avatarUrl,
    publicRepos: user.repositories?.totalCount ?? 18,
    followers: user.followers?.totalCount ?? 17,
    totalContributions: calendar?.totalContributions ?? allDays.reduce((acc, d) => acc + d.count, 0),
    currentStreak,
    longestStreak,
    weeks,
  };
}

async function fetchViaPublicApi(username) {
  // 1. Fetch GitHub profile info
  const userRes = await fetch(`https://api.github.com/users/${username}`, {
    headers: { "User-Agent": "asterdev-sync-script" },
  });
  let publicRepos = 18;
  let followers = 17;
  let avatarUrl = "https://avatars.githubusercontent.com/u/73000882?v=4";
  let name = "Douglas Luiz";

  if (userRes.ok) {
    const userData = await userRes.json();
    publicRepos = userData.public_repos ?? publicRepos;
    followers = userData.followers ?? followers;
    avatarUrl = userData.avatar_url ?? avatarUrl;
    name = userData.name ?? name;
  }

  // 2. Fetch contributions calendar from public mirror API
  const contribRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, {
    headers: { "User-Agent": "asterdev-sync-script" },
  });

  if (!contribRes.ok) {
    throw new Error(`Public contributions API failed with status ${contribRes.status}`);
  }

  const contribData = await contribRes.json();
  const rawDays = contribData.contributions || [];

  const allDays = rawDays.map((d) => ({
    date: d.date,
    count: d.count,
    level: d.level,
  }));

  // Group into weeks of 7 days
  const weeks = [];
  for (let i = 0; i < allDays.length; i += 7) {
    weeks.push(allDays.slice(i, i + 7));
  }

  const { currentStreak, longestStreak } = calculateStreaks(allDays);
  const totalContributions = contribData.total?.lastYear ?? allDays.reduce((acc, d) => acc + d.count, 0);

  return {
    updatedAt: new Date().toISOString(),
    username,
    name,
    avatarUrl,
    publicRepos,
    followers,
    totalContributions,
    currentStreak,
    longestStreak,
    weeks,
  };
}

async function main() {
  console.log(`[sync-github] Starting sync for user: ${USERNAME}...`);

  let data = null;

  if (TOKEN) {
    try {
      console.log("[sync-github] Using GitHub GraphQL API (authenticated)...");
      data = await fetchViaGraphQL(USERNAME, TOKEN);
    } catch (err) {
      console.warn(`[sync-github] GraphQL fetch failed: ${err.message}. Falling back to public API...`);
    }
  }

  if (!data) {
    console.log("[sync-github] Using Public API fallback...");
    data = await fetchViaPublicApi(USERNAME);
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JSON.stringify(data, null, 2), "utf8");

  console.log(`[sync-github] ✓ Successfully synced!`);
  console.log(`  - Username: ${data.username}`);
  console.log(`  - Total Contributions: ${data.totalContributions}`);
  console.log(`  - Public Repos: ${data.publicRepos}`);
  console.log(`  - Followers: ${data.followers}`);
  console.log(`  - Total Weeks: ${data.weeks.length}`);
  console.log(`  - Current Streak: ${data.currentStreak} days`);
  console.log(`  - Longest Streak: ${data.longestStreak} days`);
  console.log(`  - Output: ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error("[sync-github] Fatal error:", err);
  process.exit(1);
});

