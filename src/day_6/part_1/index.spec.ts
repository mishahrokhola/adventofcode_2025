import { describe, it, expect } from "vitest";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFile } from "fs/promises";
import { solve } from "./index.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe("Math problem part 1", () => {
  it("basic example from adventofcode", async () => {
    const data = await readFile(
      resolve(__dirname, "../input_example.txt"),
      "utf8"
    );

    expect(solve(data)).toEqual(4277556);
  });
});
