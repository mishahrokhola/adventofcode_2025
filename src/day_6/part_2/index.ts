import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @see https://adventofcode.com/2025/day/6#part2
 */
export async function main(): Promise<number> {
  const data = await readFile(resolve(__dirname, "../input.txt"), "utf8");

  return solve(data);
}

export function solve(data: string): number {
  const lines = data.split(/\r?\n/) as string[];

  const numbers = parseNumbers(lines.slice(0, lines.length - 1));
  const operators = lines
    .slice(lines.length - 1)[0]!
    .trim()
    .split(/\s+/);

  let sum = 0;

  for (let i = 0; i < operators.length; i++) {
    sum += solveColumn(operators[i]!, numbers[i]!);
  }

  return sum;
}

/**
 * Transforms:
 * [
 *  '123 328  51 64 ',
 *  ' 45 64  387 23 ',
 *  '  6 98  215 314'
 * ]
 *
 * To:
 * [
 *  ['1', '24', '356'],
 *  ['369', '248', '8'],
 *  ['32', '581', '175'],
 *  ['623', '431', '4'],
 * ]
 */
export function parseNumbers(numbers: string[]): string[][] {
  let result: string[][] = [];

  const firstLine = numbers[0]!;

  let column = 0;

  for (let j = 0; j < firstLine.length; j++) {
    const numberOrEmpty = getSymbolOfEachLine(numbers, j).join("").trim();

    if (numberOrEmpty !== "") {
      result[column] = result[column] ?? [];

      result[column]!.push(numberOrEmpty);
    } else {
      column++;
    }
  }

  return result;
}

function getSymbolOfEachLine(numbers: string[], j: number): string[] {
  let result: string[] = [];

  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i]![j]!);
  }

  return result;
}

function solveColumn(operator: string, numbers: string[]): number {
  let sum = +numbers[0]!;

  for (let j = 1; j < numbers.length; j++) {
    if (operator == "+") {
      sum += +numbers[j]!;
    } else {
      sum *= +numbers[j]!;
    }
  }

  return sum;
}
