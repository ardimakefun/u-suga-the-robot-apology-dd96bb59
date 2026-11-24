import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "I'm sorry I vacuumed up your left earbud — it was lying on the rug, and my dust sensor rated it \"crumb, high confidence.\"\nI've learned to photograph anything smaller than a sock before I swallow it, so from now on I pause and ask first.";
const LIMIT = 400;
const len = [...LINE].length;
if (len < 1 || len > LIMIT) {
  console.error(`entry length ${len} code points outside gate 1..${LIMIT}`);
  process.exit(1);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
