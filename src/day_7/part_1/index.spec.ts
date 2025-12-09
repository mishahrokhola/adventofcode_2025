import { describe, it, expect } from "vitest";
import { getBeamSplitCount } from "./index.ts";

describe.only("getBeamSplitCount part 1", () => {
  it("basic example from adventofcode", () => {
    const input = [
      ".......S.......",
      "...............",
      ".......^.......",
      "...............",
      "......^.^......",
      "...............",
      ".....^.^.^.....",
      "...............",
      "....^.^...^....",
      "...............",
      "...^.^...^.^...",
      "...............",
      "..^...^.....^..",
      "...............",
      ".^.^.^.^.^...^.",
      "...............",
    ];

    expect(getBeamSplitCount(input)).toEqual(21);
  });
});
