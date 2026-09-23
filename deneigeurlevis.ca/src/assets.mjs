// Génère le logo, le favicon, les illustrations et l'image Open Graph.
// Le texte des SVG est converti en tracés (opentype.js) pour s'afficher
// identiquement partout, sans dépendre des polices du visiteur.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import sharp from "sharp";
import opentype from "opentype.js";

const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const IMG = path.join(ROOT, "static/assets/img");
const FONTS = path.join(ROOT, "static/assets/fonts");
fs.mkdirSync(IMG, { recursive: true });
fs.mkdirSync(FONTS, { recursive: true });

export const C = {
  navy: "#0B2545",
  navy2: "#13315C",
  blue: "#1D4E89",
  ice: "#EAF2FA",
  frost: "#C9DDF0",
  orange: "#C2410C",
  flame: "#F97316",
  white: "#FFFFFF",
};

const fontDir = path.dirname(require.resolve("@expo-google-fonts/montserrat/package.json"));
const loadFont = (f) => { const b = fs.readFileSync(path.join(fontDir, f)); return opentype.parse(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength)); };
const black = loadFont("900Black/Montserrat_900Black.ttf");
const bold = loadFont("700Bold/Montserrat_700Bold.ttf");

function pathData(p) {
  const n = (v) => (Math.round(v * 100) / 100).toString();
  return p.commands.map((c) => {
    if (c.type === "M" || c.type === "L") return `${c.type}${n(c.x)} ${n(c.y)}`;
    if (c.type === "Q") return `Q${n(c.x1)} ${n(c.y1)} ${n(c.x)} ${n(c.y)}`;
    if (c.type === "C") return `C${n(c.x1)} ${n(c.y1)} ${n(c.x2)} ${n(c.y2)} ${n(c.x)} ${n(c.y)}`;
    return "Z";
  }).join("");
}

function textPath(font, text, x, y, size, fill, letterSpacing = 0) {
  let out = "";
  let cx = x;
  for (const ch of text) {
    const g = font.charToGlyph(ch);
    const d = pathData(g.getPath(cx, y, size));
    if (d) out += `<path d="${d}"/>`;
    cx += (g.advanceWidth / font.unitsPerEm) * size + letterSpacing;
  }
  return { svg: `<g fill="${fill}">${out}</g>`, width: cx - x - letterSpacing };
}

// --- Icône : carré bleu nuit, flocon blanc, lame de déneigement orange ---
function flake(cx, cy, r, stroke, sw) {
  const arm = `<line x1="0" y1="0" x2="0" y2="${-r}"/>` +
    `<polyline points="${-r * 0.3},${-r * 0.88} 0,${-r * 0.58} ${r * 0.3},${-r * 0.88}" fill="none"/>` +
    `<polyline points="${-r * 0.22},${-r * 0.5} 0,${-r * 0.3} ${r * 0.22},${-r * 0.5}" fill="none"/>`;
  let g = `<g transform="translate(${cx} ${cy})" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">`;
  for (let i = 0; i < 6; i++) g += `<g transform="rotate(${i * 60})">${arm}</g>`;
  return g + "</g>";
}

function iconInner(s = 64) {
  const k = s / 64;
  return `<rect width="${s}" height="${s}" fill="${C.navy}"/>` +
    flake(32 * k, 27 * k, 17 * k, C.white, 3.4 * k) +
    `<path d="M${9 * k} ${49 * k} H${55 * k} L${51 * k} ${56 * k} H${13 * k} Z" fill="${C.flame}"/>`;
}

const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">${iconInner()}</svg>`;
fs.writeFileSync(path.join(IMG, "favicon.svg"), icon);

// --- Logo horizontal (version foncée et version claire) ---
function logo(light) {
  const h = 64;
  const t1 = textPath(black, "DÉNEIGEUR", 78, 33, 27, light ? C.white : C.navy, 0.6);
  const t2 = textPath(bold, "LÉVIS", 79, 57, 18, light ? C.flame : C.orange, 5.2);
  const w = Math.ceil(78 + Math.max(t1.width, t2.width) + 4);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="Déneigeur Lévis"><title>Déneigeur Lévis</title>${iconInner()}${t1.svg}${t2.svg}</svg>`;
}
const logoDark = logo(false);
const logoLight = logo(true);
fs.writeFileSync(path.join(IMG, "logo.svg"), logoDark);
fs.writeFileSync(path.join(IMG, "logo-light.svg"), logoLight);
export const LOGO_WIDTH = Number(logoDark.match(/width="(\d+)"/)[1]);

// --- Paysage d'hiver (bande illustrée réutilisée dans les héros) ---
function houses() {
  // Rangée de maisons de banlieue avec entrées déneigées
  const H = [
    [40, 150, 120, 62], [210, 140, 150, 72], [410, 152, 110, 60],
    [590, 136, 170, 76], [820, 148, 125, 64], [1000, 138, 160, 74],
    [1220, 150, 118, 62], [1390, 142, 150, 70],
  ];
  let s = "";
  for (const [x, y, w, h] of H) {
    const roof = `<path d="M${x - 10} ${y} L${x + w / 2} ${y - h * 0.62} L${x + w + 10} ${y} Z" fill="${C.navy2}"/>` +
      `<path d="M${x - 12} ${y + 2} L${x + w / 2} ${y - h * 0.62 - 6} L${x + w + 12} ${y + 2} L${x + w + 4} ${y + 4} L${x + w / 2} ${y - h * 0.62 + 2} L${x - 4} ${y + 4} Z" fill="${C.white}"/>`;
    const body = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#17396A"/>`;
    const win = `<rect x="${x + w * 0.16}" y="${y + h * 0.28}" width="${w * 0.2}" height="${h * 0.3}" fill="#FDBA74"/>` +
      `<rect x="${x + w * 0.62}" y="${y + h * 0.28}" width="${w * 0.2}" height="${h * 0.3}" fill="#FDBA74" opacity=".85"/>`;
    const door = `<rect x="${x + w * 0.43}" y="${y + h * 0.45}" width="${w * 0.14}" height="${h * 0.55}" fill="${C.navy}"/>`;
    s += roof + body + win + door;
  }
  return s;
}
function trees() {
  const T = [[180, 214, 46], [385, 220, 40], [780, 212, 50], [975, 222, 38], [1190, 214, 46], [1560, 218, 44]];
  return T.map(([x, y, h]) =>
    `<path d="M${x} ${y - h} L${x + h * 0.36} ${y} H${x - h * 0.36} Z" fill="#0E2F55"/>` +
    `<path d="M${x} ${y - h} L${x + h * 0.18} ${y - h * 0.5} H${x - h * 0.18} Z" fill="${C.white}" opacity=".9"/>`).join("");
}
function tractor(x, y) {
  // Tracteur avec souffleuse et gerbe de neige
  return `<g transform="translate(${x} ${y})">
    <path d="M-120 -40 C-150 -110 -60 -150 10 -120" fill="none" stroke="${C.white}" stroke-width="16" stroke-linecap="round" opacity=".55"/>
    <path d="M-100 -30 C-120 -80 -60 -110 -10 -95" fill="none" stroke="${C.white}" stroke-width="10" stroke-linecap="round" opacity=".8"/>
    <rect x="-10" y="-20" width="34" height="38" fill="#334155"/>
    <rect x="-24" y="-4" width="18" height="24" fill="${C.flame}"/>
    <rect x="22" y="-42" width="70" height="36" fill="${C.flame}"/>
    <rect x="30" y="-62" width="52" height="26" fill="#FED7AA" stroke="${C.flame}" stroke-width="6"/>
    <rect x="22" y="-8" width="92" height="22" fill="${C.flame}"/>
    <rect x="96" y="-70" width="6" height="30" fill="#334155"/>
    <circle cx="44" cy="22" r="22" fill="#1E293B"/><circle cx="44" cy="22" r="9" fill="#94A3B8"/>
    <circle cx="102" cy="28" r="14" fill="#1E293B"/><circle cx="102" cy="28" r="6" fill="#94A3B8"/>
    <rect x="88" y="-78" width="18" height="8" fill="#FBBF24"/>
  </g>`;
}
function snowDots(w, h, n, seed = 7) {
  let x = seed, s = "";
  const rnd = () => ((x = (x * 9301 + 49297) % 233280) / 233280);
  for (let i = 0; i < n; i++) {
    s += `<circle cx="${(rnd() * w).toFixed(0)}" cy="${(rnd() * h).toFixed(0)}" r="${(1 + rnd() * 2.4).toFixed(1)}" fill="#fff" opacity="${(0.35 + rnd() * 0.5).toFixed(2)}"/>`;
  }
  return s;
}
const landscapeInner = `
  <path d="M0 150 C220 110 420 170 640 140 C860 110 1080 160 1300 132 C1460 112 1560 130 1600 138 V260 H0 Z" fill="#DCE9F6"/>
  ${houses()}
  <path d="M0 212 C260 196 520 222 800 206 C1080 190 1360 214 1600 202 V260 H0 Z" fill="${C.white}"/>
  ${trees()}
  <rect x="610" y="212" width="130" height="48" fill="#B8CCE0" opacity=".7"/>
  ${tractor(700, 226)}
`;
const landscape = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 260" preserveAspectRatio="xMidYMax slice" width="1600" height="260">${landscapeInner}</svg>`;
fs.writeFileSync(path.join(IMG, "paysage-hiver-deneigement-levis.svg"), landscape);

const snowfall = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="800" height="400">${snowDots(800, 400, 90)}</svg>`;
fs.writeFileSync(path.join(IMG, "flocons.svg"), snowfall);

// --- Image Open Graph 1200x630 ---
const og1 = textPath(black, "Déneigement résidentiel", 70, 250, 64, C.white);
const og2 = textPath(black, "à Lévis", 70, 330, 64, C.flame);
const og3 = textPath(bold, "Soumission gratuite · 365-334-9481", 70, 400, 34, C.frost);
const og = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <rect width="1200" height="630" fill="${C.navy}"/>
  ${snowDots(1200, 630, 120, 3)}
  <g transform="translate(70 70) scale(1.35)">${logoLight.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "").replace(/<title>.*?<\/title>/, "")}</g>
  ${og1.svg}${og2.svg}${og3.svg}
  <g transform="translate(-200 372)">${landscapeInner}</g>
</svg>`;
await sharp(Buffer.from(og)).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(IMG, "og-deneigeur-levis.jpg"));

// PNG pour le schema, l'icône Apple et les anciens navigateurs
await sharp(Buffer.from(icon)).resize(180, 180).png().toFile(path.join(IMG, "apple-touch-icon.png"));
await sharp(Buffer.from(icon)).resize(512, 512).png().toFile(path.join(IMG, "logo-deneigeur-levis-512.png"));
await sharp(Buffer.from(icon)).resize(48, 48).png().toFile(path.join(ROOT, "static/favicon.png"));
await sharp(Buffer.from(logoDark)).resize({ width: 600 }).png().toFile(path.join(IMG, "logo-deneigeur-levis.png"));

// --- Polices auto-hébergées (sous-ensemble latin) ---
const fsrc = (pkg, file) => path.join(path.dirname(require.resolve(`${pkg}/package.json`)), "files", file);
for (const [pkg, file] of [
  ["@fontsource/montserrat", "montserrat-latin-800-normal.woff2"],
  ["@fontsource/montserrat", "montserrat-latin-900-normal.woff2"],
  ["@fontsource/inter", "inter-latin-400-normal.woff2"],
  ["@fontsource/inter", "inter-latin-600-normal.woff2"],
  ["@fontsource/inter", "inter-latin-700-normal.woff2"],
]) fs.copyFileSync(fsrc(pkg, file), path.join(FONTS, file));

console.log("Assets générés. Largeur du logo :", LOGO_WIDTH);
