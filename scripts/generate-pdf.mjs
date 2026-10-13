// Génère public/portfolio-marin-barroso.pdf à partir de la page /impression/ du site exporté.
// Usage : npm run pdf (build sans basePath, puis impression avec Chrome ou Edge en mode headless).
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { execFile } from "node:child_process";
import { extname, join, resolve } from "node:path";

const OUT = resolve("out");
const TARGET = resolve("public/portfolio-marin-barroso.pdf");
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".woff2": "font/woff2", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".txt": "text/plain" };

const browser = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].find((p) => p && existsSync(p));
if (!browser) throw new Error("Chrome ou Edge introuvable : définis CHROME_PATH.");

const server = createServer(async (req, res) => {
  let path = join(OUT, decodeURIComponent(new URL(req.url, "http://x").pathname));
  try {
    if ((await stat(path)).isDirectory()) path = join(path, "index.html");
    res.writeHead(200, { "Content-Type": TYPES[extname(path)] ?? "application/octet-stream" });
    res.end(await readFile(path));
  } catch {
    res.writeHead(404).end();
  }
});

server.listen(0, () => {
  const url = `http://localhost:${server.address().port}/impression/`;
  execFile(
    browser,
    ["--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--virtual-time-budget=15000", `--print-to-pdf=${TARGET}`, url],
    (err) => {
      server.close();
      if (err) throw err;
      console.log(`PDF généré : ${TARGET}`);
    }
  );
});
