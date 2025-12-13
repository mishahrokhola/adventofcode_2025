import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @see https://adventofcode.com/2025/day/7#part2
 */
export async function main(): Promise<number> {
  const data = await readFile(resolve(__dirname, "../input.txt"), "utf8");
  const input = data.split(/\r?\n/);

  return getBeamSplitTimelinesCount(input);
}

export function getBeamSplitTimelinesCount(input: string[]): number {
  let beams = { [input[0]!.indexOf("S")]: 1 };

  for (let i = 1; i < input.length - 1; i++) {
    const line = input[i]!;
    const newBeams: Record<number, number> = {};

    if (!line.includes("^")) {
      continue;
    }

    for (const [index, count] of Object.entries(beams)) {
      if (line[+index] === "^") {
        newBeams[+index - 1] = (newBeams[+index - 1] ?? 0) + 1 * count;
        newBeams[+index + 1] = (newBeams[+index + 1] ?? 0) + 1 * count;
      } else {
        newBeams[+index] = (newBeams[+index] ?? 0) + count;
      }
    }

    beams = newBeams;
  }

  return Object.entries(beams).reduce((total, [_, count]) => total + count, 0);
}
