import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFile } from "fs/promises";

import { type Range, parseRange } from "../shared/index.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @see https://adventofcode.com/2025/day/5
 */
export async function main(): Promise<number> {
  const data = await readFile(resolve(__dirname, "../input.txt"), "utf8");
  const [rangesStr, idsStr] = data.split(/\n\s*\n/) as [string, string];

  const ranges = rangesStr.split(/\r?\n/) as Range[];
  const ids = idsStr.split(/\r?\n/) as `${number}`[];

  return getFreshIDsCount(ranges, ids);
}

export function getFreshIDsCount(ranges: Range[], ids: `${number}`[]): number {
  let count = 0;

  for (const id of ids) {
    count += +isIDFresh(ranges, id);
  }

  return count;
}

export function isIDFresh(ranges: Range[], id: `${number}`): boolean {
  const numId = +id;

  for (const range of ranges) {
    const [start, end] = parseRange(range);

    if (start <= numId && numId <= end) return true;
  }

  return false;
}
