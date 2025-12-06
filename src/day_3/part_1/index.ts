import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFile } from "fs/promises";

import { type Bank } from "../shared/index.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @see https://adventofcode.com/2025/day/2
 */
export async function main(): Promise<number> {
  const data = await readFile(resolve(__dirname, "../input.txt"), "utf8");
  const rotations = data.split(/\r?\n/) as Bank[];

  return getBatteriesSum(rotations);
}

export function getBatteriesSum(input: Bank[]): number {
  let sum = 0;

  for (const range of input) {
    sum += getBankBatery(range);
  }

  return sum;
}

export function getBankBatery(range: Bank): number {
  let decInd = 0;

  for (let i = 1; i < range.length - 1; i++) {
    if (+range[i]! > +range[decInd]!) {
      decInd = i;
    }
  }

  let intInd = decInd + 1;

  for (let i = intInd; i < range.length; i++) {
    if (+range[i]! > +range[intInd]!) {
      intInd = i;
    }
  }

  return +`${range[decInd]}${range[intInd]}`;
}
