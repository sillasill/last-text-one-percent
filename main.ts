// make.fun — "Last Text at One Percent"
// Writes one final text message to /output/entry.txt.
// Deterministic: the text is a constant. No randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "I'm at 1% and this is goodbye. Tell my charger I forgive it, tell the group chat I died doing what I loved: ignoring all of you.";

// The gate allows 1–200 characters: fail loudly rather than submit an invalid line.
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`TEXT must be 1-200 characters, got ${TEXT.length}`);
}

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, TEXT, "utf8");
