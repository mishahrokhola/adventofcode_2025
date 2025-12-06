import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFile } from "fs/promises";

import { getNeighborsPaperCount } from "../shared/utils.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @see https://adventofcode.com/2025/day/4
 */
export async function main(): Promise<number> {
  const data = await readFile(resolve(__dirname, "../input.txt"), "utf8");
  const grid = data.split(/\r?\n/) as string[];

  return getAccessiblePapersCount(grid);
}

export function getAccessiblePapersCount(input: string[]): number {
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i]!.length; j++) {
      if (input[i]![j] === ".") continue;

      const neighborPapers = getNeighborsPaperCount(input, i, j);

      if (neighborPapers < 4) sum++;
    }
  }

  return sum;
}
