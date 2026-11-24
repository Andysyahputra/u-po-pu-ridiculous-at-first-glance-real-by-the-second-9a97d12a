// Ridiculous at First Glance, Real by the Second
// Writes one sentence (<=200 chars) pitching a bizarre-but-sound startup
// to /output/entry.txt. Deterministic: no randomness, no time, no I/O
// beyond the single output file.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "We rent professional mourners for dead houseplants: a trained griever holds a tiny funeral for your fern, and the guilty owner pays $40 for closure instead of quietly buying a replacement.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
