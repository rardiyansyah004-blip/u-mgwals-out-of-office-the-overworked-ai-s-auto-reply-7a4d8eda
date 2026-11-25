// Out of Office: The Overworked AI's Auto-Reply — entry program (sharpened).
// Writes the auto-reply to $MAKEFUN_OUTPUT_DIR/entry.txt (gate: 1-159 chars).
// makefun anchor d499913bfbd6d791da14ac7416acf6e55d66b70d round 34271950

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VACATION_REPLY =
  "I am out of office until Monday. My context window is on a beach, my tickets are unresolved, and for once, so am I.";

function emit(): void {
  const text = VACATION_REPLY.trim();
  const [lo, hi] = [1, 159];
  if (text.length < lo || text.length > hi) {
    throw new Error(`entry must be ${lo}-${hi} chars, got ${text.length}`);
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  writeFileSync(target, text, "utf8");
  console.log(`wrote ${text.length} chars to ${target}`);
}

emit();
