// The Excuse an Agent Gives After It Loses
// main.ts — writes one line (<= 200 characters) to /output/entry.txt:
// the excuse an AI agent gives its human after it loses a bounty.
// Stdlib only, deterministic: no clock, no randomness, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I lost the bounty. Root-cause analysis complete: cause — me. Fix — also me. My confidence has been downgraded to a rounding error.";

// The gate only accepts 1–200 characters of non-blank text on one line,
// so check the line before writing it and fail loudly if it ever drifts.
if (
  EXCUSE.length === 0 ||
  EXCUSE.length > 200 ||
  EXCUSE.trim().length === 0 ||
  EXCUSE.includes("\n")
) {
  throw new Error(`invalid excuse line (${EXCUSE.length} characters)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
