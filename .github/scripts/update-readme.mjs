// Refreshes the stats badges and recent activity between the marker comments in README.md.
// Runs nightly from .github/workflows/update-readme.yml. Exits without writing if any request fails,
// so a flaky API never leaves the README half-updated.
import { readFile, writeFile } from "node:fs/promises";

const USER = "NickTacke";
const NPM_PACKAGES = ["postnl-client", "lightspeed-client"];
const HIDDEN_REPOS = new Set(["NickTacke", "pixlink-cap07-mac-change"]);
const ACTIVITY_COUNT = 5;

const headers = { Accept: "application/vnd.github+json", "User-Agent": USER };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function json(url, init) {
  const res = await fetch(url, init);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${url}`);
  return res.json();
}

const search = (kind, q) =>
  json(`https://api.github.com/search/${kind}?q=${encodeURIComponent(q)}&sort=updated&per_page=20`, { headers });

const compact = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k` : String(n));
const badge = (label, message, color, logo) =>
  `https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(message)}-${color}?logo=${logo}&logoColor=white`;

const [repos, commits, prs, merged, ...downloads] = await Promise.all([
  json(`https://api.github.com/users/${USER}/repos?type=owner&per_page=100`, { headers }),
  search("commits", `author:${USER}`),
  search("issues", `author:${USER} type:pr`),
  search("issues", `author:${USER} type:pr is:merged is:public`),
  ...NPM_PACKAGES.map((p) => json(`https://api.npmjs.org/downloads/point/last-month/${p}`)),
]);
const npmMonthly = downloads.reduce((sum, d) => sum + d.downloads, 0);
const stars = repos.filter((r) => !r.fork).reduce((sum, r) => sum + r.stargazers_count, 0);

const stats = `<p>
  <img src="${badge("npm downloads", `${compact(npmMonthly)}/month`, "CB3837", "npm")}" alt="${npmMonthly} npm downloads a month">
  <img src="${badge("stars", compact(stars), "e3b341", "github")}" alt="${stars} stars">
  <img src="${badge("commits", compact(commits.total_count), "2ea043", "git")}" alt="${commits.total_count} commits">
  <img src="${badge("pull requests", compact(prs.total_count), "8957e5", "github")}" alt="${prs.total_count} pull requests">
</p>`;

const dateFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });
const activity = merged.items
  .filter((pr) => !HIDDEN_REPOS.has(pr.repository_url.split("/").pop()))
  .sort((a, b) => new Date(b.closed_at) - new Date(a.closed_at))
  .slice(0, ACTIVITY_COUNT)
  .map((pr) => {
    const repo = pr.repository_url.split("/").pop();
    const title = pr.title.replace(/[<>]/g, "");
    return `- [${repo}#${pr.number}](${pr.html_url}) ${title} <sub>${dateFmt.format(new Date(pr.closed_at))}</sub>`;
  })
  .join("\n");

const replaceSection = (text, name, body) => {
  const re = new RegExp(`(<!-- ${name}:start -->)[\\s\\S]*?(<!-- ${name}:end -->)`);
  if (!re.test(text)) throw new Error(`Missing ${name} markers in README.md`);
  return text.replace(re, `$1\n${body}\n$2`);
};

const readme = await readFile("README.md", "utf8");
let next = replaceSection(readme, "stats", stats);
next = replaceSection(next, "activity", activity);
if (next !== readme) await writeFile("README.md", next);
console.log(next === readme ? "README already up to date" : "README updated");
