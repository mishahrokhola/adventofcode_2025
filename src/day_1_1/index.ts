import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DIAL_START = 50;
const DIAL_MAX = 99 + 1; // dial has 100 positions: 0..99

export type Rotation = `L${number}` | `R${number}`;

/**
 * @see https://adventofcode.com/2025/day/1
 */
export async function main(): Promise<number> {
  const data = await readFile(resolve(__dirname, "input.txt"), "utf8");
  const rotations = data.split(/\r?\n/) as Rotation[];

  return getZeroCounts(rotations);
}

export function getZeroCounts(input: Rotation[], initial = DIAL_START): number {
  let zeroCounts = 0;
  let current = initial;

  for (const rotation of input) {
    current = rotate(current, rotation);

    if (current === 0) zeroCounts++;
  }

  return zeroCounts;
}

/** Rotates dial from current number to either left or right and returns new dial number */
function rotate(current: number, rotation: Rotation): number {
  const direction = rotation[0] as "L" | "R";
  const number = +rotation.slice(1);
  const actualRotate = number % DIAL_MAX; // if DIAL_MAX 100: 626 => 26 

  if (actualRotate === 0) {
    return current;
  }

  if (direction === "L") {
    const newCurrent = current - actualRotate;

    return newCurrent < 0 ? DIAL_MAX + newCurrent : newCurrent;
  }

  const newCurrent = current + actualRotate;

  return newCurrent > DIAL_MAX - 1 ? newCurrent - DIAL_MAX : newCurrent;
}
