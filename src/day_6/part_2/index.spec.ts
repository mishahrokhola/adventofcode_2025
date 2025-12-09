import { describe, it, expect } from "vitest";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFile } from "fs/promises";

import { solve, parseNumbers } from "./index.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe("Math problem part 2", () => {
  it("basic example from adventofcode", async () => {
    const data = await readFile(
      resolve(__dirname, "../input_example.txt"),
      "utf8"
    );

    expect(solve(data)).toEqual(3263827);
  });

  it("basic parse of number from adventofcode", async () => {
    // prettier-ignore
    const numbers = [
      "123 328  51 64 ", 
      " 45 64  387 23 ", 
      "  6 98  215 314"
    ];

    const result = parseNumbers(numbers);

    expect(result).toEqual([
      ["1", "24", "356"],
      ["369", "248", "8"],
      ["32", "581", "175"],
      ["623", "431", "4"],
    ]);
  });
});
