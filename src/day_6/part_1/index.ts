import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @see https://adventofcode.com/2025/day/6
 */
export async function main(): Promise<number> {
  const data = await readFile(resolve(__dirname, "../input.txt"), "utf8");

  return solve(data);
}

export function solve(data: string): number {
  const lines = data.split(/\r?\n/) as string[];
  const all = lines.map((item) => item.trim().split(/\s+/));
  const numbers = all.slice(0, all.length - 1);
  const operators = all.slice(all.length - 1)[0]!;

  let sum = 0;

  for (let i = 0; i < operators.length; i++) {
    sum += solveColumn(operators[i]!, i, numbers);
  }

  return sum;
}

function solveColumn(
  operator: string,
  index: number,
  numbers: string[][]
): number {
  let sum = +numbers[0]![index]!;

  for (let j = 1; j < numbers.length; j++) {
    if (operator == "+") {
      sum += +numbers[j]![index]!;
    } else {
      sum *= +numbers[j]![index]!;
    }
  }

  return sum;
}
