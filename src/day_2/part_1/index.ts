import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFile } from "fs/promises";

import { type Range, parseRange, isIDValid } from "../shared/index.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @see https://adventofcode.com/2025/day/2
 */
export async function main(): Promise<number> {
  const data = await readFile(resolve(__dirname, "../input.txt"), "utf8");
  const rotations = data.split(",") as Range[];

  return getInvalidIDsSum(rotations);
}

export function getInvalidIDsSum(input: Range[]): number {
  let sum = 0;

  for (const range of input) {
    sum += getRangeInvalidIDsSum(range);
  }

  return sum;
}

export function getRangeInvalidIDsSum(range: Range): number {
  const [start, end] = parseRange(range);

  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += isIDValid(i) ? 0 : i;
  }

  return sum;
}
