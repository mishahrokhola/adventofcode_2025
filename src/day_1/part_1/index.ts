import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFile } from "fs/promises";

import { type Rotation, DIAL_START, rotate } from "../shared/index.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @see https://adventofcode.com/2025/day/1
 */
export async function main(): Promise<number> {
  const data = await readFile(resolve(__dirname, "../input.txt"), "utf8");
  const input = data.split(/\r?\n/) as Rotation[];

  return getZeroCounts(input);
}

export function getZeroCounts(input: Rotation[], initial = DIAL_START): number {
  let zeroCounts = 0;
  let current = initial;

  for (const rotation of input) {
    [current] = rotate(current, rotation);

    if (current === 0) zeroCounts++;
  }

  return zeroCounts;
}
