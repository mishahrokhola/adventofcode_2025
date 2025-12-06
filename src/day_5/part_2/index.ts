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

  return getAllFreshIDsCount(ranges);
}

export function getAllFreshIDsCount(ranges: Range[]): number {
  const reducedRanges = reduceDuplicatedRanges(ranges);

  let count = 0;

  for (const range of reducedRanges) {
    const [start, end] = parseRange(range);

    count += end - start + 1;
  }

  return count;
}

function reduceDuplicatedRanges(ranges: Range[]): Range[] {
  const filteredRanges: Range[] = [];

  for (const range of ranges) {
    const similarRangeIndex = findSimilarRangeIndex(filteredRanges, range);

    if (similarRangeIndex !== -1) {
      const [range1Start, range1End] = parseRange(
        filteredRanges[similarRangeIndex]!
      );
      const [range2Start, range2End] = parseRange(range);

      const newRangeStart = Math.min(range1Start, range2Start);
      const newRangeEnd = Math.max(range1End, range2End);

      filteredRanges[similarRangeIndex] = `${newRangeStart}-${newRangeEnd}`;
    } else {
      filteredRanges.push(range);
    }
  }

  if (filteredRanges.length === ranges.length) {
    return filteredRanges;
  }

  return reduceDuplicatedRanges(filteredRanges);
}

function findSimilarRangeIndex(ranges: Range[], range: Range): number {
  const [start, end] = parseRange(range);

  for (let i = 0; i < ranges.length; i++) {
    const [rangeItemStart, rangeItemEnd] = parseRange(ranges[i]!);

    // if new in existing
    if (start <= rangeItemStart && rangeItemStart <= end) {
      return i;
    }

    if (start <= rangeItemEnd && rangeItemEnd <= end) {
      return i;
    }

    // if existing in new
    if (rangeItemStart <= start && start <= rangeItemEnd) {
      return i;
    }

    if (rangeItemStart <= end && end <= rangeItemEnd) {
      return i;
    }
  }

  return -1;
}
