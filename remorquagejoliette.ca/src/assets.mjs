// Génère le logo, le favicon, l'illustration de route et l'image Open Graph.
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

// Palette de la marque
export const C = {
  ink: "#121417",      // charbon : texte, fonds sombres
  asphalt: "#1B1F24",  // asphalte : héros et sections sombres
  steel: "#2A3038",    // acier : décor, silhouettes
  slate: "#3A424D",
  yellow: "#FFC20E",   // jaune sécurité : appels à l'action
  red: "#D7261E",      // rouge gyrophare : accents
  white: "#FFFFFF",
  mist: "#D5DAE1",
};

const fsrc = (pkg, file) => path.join(path.dirname(require.resolve(`${pkg}/package.json`)), "files", file);
const loadFont = (file) => { const b = fs.readFileSync(file); return opentype.parse(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength)); };
const heavy = loadFont(fsrc("@fontsource/barlow-condensed", "barlow-condensed-latin-800-normal.woff"));
const bold = loadFont(fsrc("@fontsource/barlow-condensed", "barlow-condensed-latin-700-normal.woff"));

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

// --- Icône : carré jaune sécurité, crochet de remorquage noir en forme de « J » ---
function iconInner(s = 64) {
  const k = s / 64;
  const p = (v) => +(v * k).toFixed(2);
  const stripes = [-1, 0, 1, 2, 3, 4, 5, 6].map((i) => `<path d="M${p(i * 10)} ${p(64)} L${p(i * 10 + 6)} ${p(57)} H${p(i * 10 + 11)} L${p(i * 10 + 5)} ${p(64)} Z" fill="${C.yellow}"/>`).join("");
  return `<svg x="0" y="0" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" overflow="hidden">` +
    `<rect width="${s}" height="${s}" fill="${C.yellow}"/>` +
    `<rect x="${p(30)}" y="${p(5)}" width="${p(12)}" height="${p(15)}" rx="${p(6)}" fill="none" stroke="${C.ink}" stroke-width="${p(4)}"/>` +
    `<path d="M${p(36)} ${p(21)} V${p(38)} A${p(10.5)} ${p(10.5)} 0 0 1 ${p(15)} ${p(38)} V${p(31)}" fill="none" stroke="${C.ink}" stroke-width="${p(7)}" stroke-linecap="round"/>` +
    `<path d="M0 ${p(57)} H${s} V${s} H0 Z" fill="${C.ink}"/>` + stripes + `</svg>`;
}

const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">${iconInner()}</svg>`;
fs.writeFileSync(path.join(IMG, "favicon.svg"), icon);

// --- Logo horizontal (version foncée et version claire) ---
function logo(light) {
  const h = 64;
  const t1 = textPath(heavy, "REMORQUAGE", 76, 35, 38, light ? C.white : C.ink, 0.4);
  const t2 = textPath(bold, "JOLIETTE", 77, 60, 24, light ? C.yellow : C.red, 5.4);
  const w = Math.ceil(76 + Math.max(t1.width, t2.width) + 4);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="Remorquage Joliette"><title>Remorquage Joliette</title>${iconInner()}${t1.svg}${t2.svg}</svg>`;
}
const logoDark = logo(false);
const logoLight = logo(true);
fs.writeFileSync(path.join(IMG, "logo.svg"), logoDark);
fs.writeFileSync(path.join(IMG, "logo-light.svg"), logoLight);
export const LOGO_WIDTH = Number(logoDark.match(/width="(\d+)"/)[1]);

// --- Illustration : route de nuit avec dépanneuse à plateau (bande répétée dans les héros) ---
function treeline() {
  let s = "", x = 0, seed = 11;
  const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
  while (x < 1600) {
    const w = 26 + rnd() * 30, h = 34 + rnd() * 46;
    if (!(x > 1180 && x < 1290)) s += `<path d="M${x.toFixed(0)} 124 L${(x + w / 2).toFixed(0)} ${(124 - h).toFixed(0)} L${(x + w).toFixed(0)} 124 Z"/>`;
    x += w * 0.72;
  }
  return `<g fill="#232932">${s}</g>`;
}
function spire(x) {
  // Silhouette de clocher, clin d'œil au centre-ville de Joliette
  return `<g fill="#262C35"><rect x="${x}" y="70" width="44" height="54"/><rect x="${x + 12}" y="40" width="20" height="34"/><path d="M${x + 10} 42 L${x + 22} 4 L${x + 34} 42 Z"/><rect x="${x + 19}" y="52" width="6" height="12" fill="#3A424D"/></g>`;
}
function car(x, y, body = "#8FA3B8") {
  return `<g transform="translate(${x} ${y})">
    <path d="M0 26 V16 L14 13 L30 0 H74 L92 13 L110 16 V26 Z" fill="${body}"/>
    <path d="M34 4 H56 V13 H22 Z M60 4 H72 L86 13 H60 Z" fill="#1B1F24" opacity=".85"/>
    <circle cx="24" cy="27" r="10" fill="#0E1013" stroke="#4A525D" stroke-width="2"/><circle cx="24" cy="27" r="4" fill="#5B636D"/>
    <circle cx="88" cy="27" r="10" fill="#0E1013" stroke="#4A525D" stroke-width="2"/><circle cx="88" cy="27" r="4" fill="#5B636D"/>
  </g>`;
}
function towTruck(x, y) {
  // Dépanneuse à plateau orientée vers la droite, gyrophare allumé
  return `<g transform="translate(${x} ${y})">
    <path d="M300 30 L520 -8 L520 34 Z" fill="${C.yellow}" opacity=".10"/>
    <rect x="0" y="36" width="210" height="12" fill="${C.yellow}"/>
    <path d="M0 36 L-10 48 H0 Z" fill="${C.yellow}"/>
    ${car(40, -2, "#A9B7C6")}
    <path d="M58 24 L46 36 M150 24 L162 36" stroke="#E8ECF0" stroke-width="2"/>
    <rect x="-4" y="48" width="300" height="12" fill="#3A424D"/>
    <path d="M206 -26 H262 L290 8 L300 12 V48 H206 Z" fill="${C.white}"/>
    <path d="M232 -18 H258 L278 8 H232 Z" fill="#1B1F24" opacity=".9"/>
    <rect x="206" y="14" width="94" height="6" fill="${C.red}"/>
    <rect x="224" y="-34" width="34" height="8" fill="${C.yellow}"/>
    <rect x="224" y="-34" width="12" height="8" fill="${C.red}"/>
    <rect x="292" y="22" width="8" height="8" fill="#FFF4CC"/>
    <circle cx="44" cy="64" r="15" fill="#0E1013" stroke="#4A525D" stroke-width="3"/><circle cx="44" cy="64" r="6" fill="#5B636D"/>
    <circle cx="96" cy="64" r="15" fill="#0E1013" stroke="#4A525D" stroke-width="3"/><circle cx="96" cy="64" r="6" fill="#5B636D"/>
    <circle cx="256" cy="64" r="15" fill="#0E1013" stroke="#4A525D" stroke-width="3"/><circle cx="256" cy="64" r="6" fill="#5B636D"/>
  </g>`;
}
const roadInner = `
  ${treeline()}
  ${spire(1210)}
  <rect x="0" y="124" width="1600" height="76" fill="#101215"/>
  <rect x="0" y="124" width="1600" height="4" fill="#3A424D"/>
  <g fill="${C.yellow}">${Array.from({ length: 20 }, (_, i) => `<rect x="${i * 80 + 10}" y="160" width="44" height="5"/>`).join("")}</g>
  <rect x="0" y="194" width="1600" height="3" fill="#E8ECF0" opacity=".6"/>
  ${towTruck(640, 88)}
`;
const road = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 200" preserveAspectRatio="xMidYMax slice" width="1600" height="200">${roadInner}</svg>`;
fs.writeFileSync(path.join(IMG, "route-depanneuse-joliette.svg"), road);

// --- Image Open Graph 1200x630 ---
const og1 = textPath(heavy, "Remorquage 24 h sur 24", 70, 262, 84, C.white);
const og2 = textPath(heavy, "à Joliette et dans Lanaudière", 70, 346, 70, C.yellow);
const og3 = textPath(bold, "Soumission gratuite · 450-915-0067", 70, 412, 44, C.mist, 1);
const og = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <rect width="1200" height="630" fill="${C.asphalt}"/>
  <g transform="translate(70 64) scale(1.35)">${logoLight.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "").replace(/<title>.*?<\/title>/, "")}</g>
  ${og1.svg}${og2.svg}${og3.svg}
  <g transform="translate(-380 430)">${roadInner}</g>
</svg>`;
await sharp(Buffer.from(og)).jpeg({ quality: 84, mozjpeg: true }).toFile(path.join(IMG, "og-remorquage-joliette.jpg"));

// PNG pour le schema, l'icône Apple et les anciens navigateurs
await sharp(Buffer.from(icon)).resize(180, 180).png().toFile(path.join(IMG, "apple-touch-icon.png"));
await sharp(Buffer.from(icon)).resize(512, 512).png().toFile(path.join(IMG, "logo-remorquage-joliette-512.png"));
await sharp(Buffer.from(icon)).resize(48, 48).png().toFile(path.join(ROOT, "static/favicon.png"));
await sharp(Buffer.from(logoDark)).resize({ width: 600 }).png().toFile(path.join(IMG, "logo-remorquage-joliette.png"));

// --- Polices auto-hébergées (sous-ensemble latin) ---
for (const [pkg, file] of [
  ["@fontsource/barlow-condensed", "barlow-condensed-latin-700-normal.woff2"],
  ["@fontsource/barlow-condensed", "barlow-condensed-latin-800-normal.woff2"],
  ["@fontsource/inter", "inter-latin-400-normal.woff2"],
  ["@fontsource/inter", "inter-latin-600-normal.woff2"],
  ["@fontsource/inter", "inter-latin-700-normal.woff2"],
]) fs.copyFileSync(fsrc(pkg, file), path.join(FONTS, file));

console.log("Assets générés. Largeur du logo :", LOGO_WIDTH);
