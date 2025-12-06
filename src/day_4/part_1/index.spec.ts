import { describe, it, expect } from "vitest";
import { getAccessiblePapersCount } from "./index.ts";

describe.only("Accessible paperps count part 1", () => {
  it("basic example from adventofcode", () => {
    const grid = [
      "..@@.@@@@.",
      "@@@.@.@.@@",
      "@@@@@.@.@@",
      "@.@@@@..@.",
      "@@.@@@@.@@",
      ".@@@@@@@.@",
      ".@.@.@.@@@",
      "@.@@@.@@@@",
      ".@@@@@@@@.",
      "@.@.@@@.@.",
    ];

    expect(getAccessiblePapersCount(grid)).toEqual(13);
  });
});
