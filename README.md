<div align="center">

# Nick Tacke

Software engineer · TypeScript & backend systems · Netherlands 🇳🇱

<a href="https://brawltome.app"><img src="assets/brawltome-logo.png" alt="" height="28" align="absmiddle"> brawltome.app</a>

</div>

## 👋 About

I build backend-heavy systems: typed API clients, data pipelines, and services that keep running when nobody's watching.

I also like taking undocumented things apart, like game replay formats, bytecode and admin panels, and turning them into tools other people can rely on.

<!-- stats:start -->
<p>
  <img src="https://img.shields.io/badge/npm%20downloads-785%2Fmonth-CB3837?logo=npm&logoColor=white" alt="785 npm downloads a month">
  <img src="https://img.shields.io/badge/stars-32-e3b341?logo=github&logoColor=white" alt="32 stars">
  <img src="https://img.shields.io/badge/commits-1.7k-2ea043?logo=git&logoColor=white" alt="1676 commits">
  <img src="https://img.shields.io/badge/pull%20requests-232-8957e5?logo=github&logoColor=white" alt="232 pull requests">
</p>
<!-- stats:end -->

## 🛠️ Stack

<table>
  <tr>
    <td><b>Languages</b></td>
    <td><img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript"> <img src="https://img.shields.io/badge/Lua-2C2D72?logo=lua&logoColor=white" alt="Lua"> <img src="https://img.shields.io/badge/C++-00599C?logo=cplusplus&logoColor=white" alt="C++"></td>
  </tr>
  <tr>
    <td><b>Backend &amp; data</b></td>
    <td><img src="https://img.shields.io/badge/Bun-000000?logo=bun&logoColor=white" alt="Bun"> <img src="https://img.shields.io/badge/Hono-E36002?logo=hono&logoColor=white" alt="Hono"> <img src="https://img.shields.io/badge/tRPC-2596BE?logo=trpc&logoColor=white" alt="tRPC"> <img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white" alt="PostgreSQL"></td>
  </tr>
  <tr>
    <td><b>Frontend &amp; apps</b></td>
    <td><img src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white" alt="Next.js"> <img src="https://img.shields.io/badge/React-087EA4?logo=react&logoColor=white" alt="React"> <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS"> <img src="https://img.shields.io/badge/Tauri-24C8DB?logo=tauri&logoColor=white" alt="Tauri"></td>
  </tr>
  <tr>
    <td><b>Infra &amp; tooling</b></td>
    <td><img src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white" alt="Docker"> <img src="https://img.shields.io/badge/OpenTelemetry-425CC7?logo=opentelemetry&logoColor=white" alt="OpenTelemetry"> <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?logo=githubactions&logoColor=white" alt="GitHub Actions"> <img src="https://img.shields.io/badge/Linux-333333?logo=linux&logoColor=white" alt="Linux"></td>
  </tr>
</table>

## 📊 BrawlTome

A stats site for Brawlhalla, live at [brawltome.app](https://brawltome.app), tracking over **800,000 players** and serving close to **a million requests a month**.

Search any player or clan to see their ranked history, or watch who's queueing right now.

<a href="https://brawltome.app"><img src="assets/brawltome-tour.gif" alt="Tour of BrawlTome: leaderboard, player page, clan page and live queue" width="100%"></a>

| For players | Under the hood |
| --- | --- |
| Player profiles with rating history and old names | Every API refresh runs through a job queue in Postgres |
| Leaderboards for every bracket and region | Jobs survive restarts, retry on failure and never double up |
| Clan pages and a live ranked queue | Stays inside the Brawlhalla API's rate limits |
| A Discord bot and a desktop overlay | One typed API serves the web app, bot and overlay |

<sub>Bun · Hono · tRPC · Next.js · Tauri · PostgreSQL · [source](https://github.com/NickTacke/brawltome)</sub>

## 🧰 Other projects

- [**brawlhalla-sim**](https://github.com/NickTacke/brawlhalla-sim): Brawlhalla's game logic, rebuilt from replays and bytecode
- [**txApi**](https://github.com/NickTacke/txApi): talk to txAdmin from any FiveM resource
- [**lightspeed-search**](https://github.com/NickTacke/lightspeed-search): AI product search and storefront widgets for Lightspeed webshops
- [**postnl-client**](https://github.com/NickTacke/postnl-client) [![npm](https://img.shields.io/npm/dm/postnl-client?label=npm&color=CB3837)](https://www.npmjs.com/package/postnl-client) and [**lightspeed-client**](https://github.com/NickTacke/lightspeed-client) [![npm](https://img.shields.io/npm/dm/lightspeed-client?label=npm&color=CB3837)](https://www.npmjs.com/package/lightspeed-client): typed TypeScript SDKs for shipping and webshop APIs

## 🕒 Recent activity

<!-- activity:start -->
- [brawltome#361](https://github.com/NickTacke/brawltome/pull/361) fix(infra): give next/image a writable cache so the header logo stops hanging <sub>18 Oct</sub>
- [brawltome#358](https://github.com/NickTacke/brawltome/pull/358) ci: probe the public site from outside every five minutes <sub>8 Oct</sub>
- [brawltome#357](https://github.com/NickTacke/brawltome/pull/357) fix(observability): don't page when a deep crawl waits out a Brawlhalla outage <sub>8 Oct</sub>
- [brawltome#355](https://github.com/NickTacke/brawltome/pull/355) feat(ranked): show solo queue and fixed teams first seen by the deep crawl <sub>8 Oct</sub>
- [brawltome#354](https://github.com/NickTacke/brawltome/pull/354) test(api): de-flake overlapping replicas runtime test <sub>8 Oct</sub>
<!-- activity:end -->
