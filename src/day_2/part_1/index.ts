import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFile } from "fs/promises";

import { type Range, parseRange } from "../shared/index.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @see https://adventofcode.com/2025/day/2
 */
export async function main(): Promise<number> {
  const data = await readFile(resolve(__dirname, "../input.txt"), "utf8");
  const input = data.split(",") as Range[];

  return getInvalidIDsSum(input);
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

export function isIDValid(id: number): boolean {
  const strId = `${id}`;
  const isEven = strId.length % 2 === 0;

  // if number is not even we can't have reapeat
  if (!isEven) {
    return true;
  }

  const half1 = strId.substring(0, strId.length / 2);
  const half2 = strId.substring(strId.length / 2, strId.length);

  return half1 !== half2;
}
