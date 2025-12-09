import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @see https://adventofcode.com/2025/day/7
 */
export async function main(): Promise<number> {
  const data = await readFile(resolve(__dirname, "../input.txt"), "utf8");
  const input = data.split(/\r?\n/);

  return getBeamSplitCount(input);
}

export function getBeamSplitCount(input: string[]): number {
  let beams = new Set([input[0]!.indexOf("S")]);
  let splitCount = 0;

  for (let i = 1; i < input.length - 1; i++) {
    const line = input[i]!;
    const newBeams = new Set<number>();

    for (const beamIndex of beams) {
      if (line[beamIndex] === "^") {
        beamIndex - 1 >= 0 && newBeams.add(beamIndex - 1);
        beamIndex + 1 < line.length && newBeams.add(beamIndex + 1);
        splitCount++;
      } else {
        newBeams.add(beamIndex);
      }
    }

    beams = newBeams;
  }

  return splitCount;
}
