import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFile } from "fs/promises";

import { type Bank, getBankBatery } from "../shared/index.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @see https://adventofcode.com/2025/day/3#part2
 */
export async function main(): Promise<number> {
  const data = await readFile(resolve(__dirname, "../input.txt"), "utf8");
  const input = data.split(/\r?\n/) as Bank[];

  return getBatteriesSum(input);
}

export function getBatteriesSum(input: Bank[]): number {
  let sum = 0;

  for (const range of input) {
    sum += getBankBatery(range, 12);
  }

  return sum;
}
