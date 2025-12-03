import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFile } from "fs/promises";

import { type Range, parseRange } from "../shared/index.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @see https://adventofcode.com/2025/day/2#part2
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

export function isIDValid(id: number): boolean {
  const strId = `${id}`;

  for (let i = Math.trunc(strId.length / 2); i >= 1; i--) {
    // if number can't be split into equal parts
    if (strId.length % i !== 0) continue;

    const parts = splitByLength(strId, i);

    if (isEqualParts(parts)) {
      return false;
    }
  }

  return true;
}

/**
 * splitByLength('1212121212', 5); // ['12121', '21212'];
 * splitByLength('1212121212', 2); // ['12', '12', '12', '12', '12'];
 */
export function splitByLength(str: string, length: number): string[] {
  const result = [];

  for (let i = 0; i < str.length; i += length) {
    if (i + length > str.length) break;

    result.push(str.substring(i, i + length));
  }

  return result;
}

/**
 * isEqualParts(['12121', '21212']); // false
 * isEqualParts(['12', '12', '12', '12', '12']); // true
 */
export function isEqualParts(parts: string[]): boolean {
  for (let i = 1; i < parts.length; i++) {
    if (parts[0] !== parts[i]) {
      return false;
    }
  }

  return true;
}
