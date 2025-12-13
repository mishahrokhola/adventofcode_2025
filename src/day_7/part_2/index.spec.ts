import { describe, it, expect } from "vitest";
import { getBeamSplitTimelinesCount } from "./index.ts";

describe("getBeamSplitTimelinesCount part 2", () => {
  it("basic example from adventofcode", () => {
    const input = [
      ".......S.......",
      "...............",
      ".......^.......",
      "...............", // 1 split (2 lines)
      "......^.^......",
      "...............", // 3 splits (4 lines)
      ".....^.^.^.....",
      "...............", // 6 splits (8 lines)
      "....^.^...^....",
      "...............", // 10 splits (13 lines)
      "...^.^...^.^...",
      "...............", // 20 lines
      "..^...^.....^..",
      "...............", // 22 lines
      ".^.^.^.^.^...^.",
      "...............", // 21 split (28 lines)
    ];

    expect(getBeamSplitTimelinesCount(input)).toEqual(40);
  });

  it("custom example", () => {
    const input = [
      ".......S.......",
      "...............",
      ".......^.......",
      "...............", // 1 split
      "......^........",
      "...............", // 2 splits
      ".....^..^......",
      "...............", // 4 spilts
    ];

    expect(getBeamSplitTimelinesCount(input)).toEqual(5);
  });

  it("custom example 2", () => {
    const input = [
      ".......S.......",
      "...............",
      ".......^.......",
      "...............", // 1 split (2 lines)
      "......^.^......",
      "...............", // 3 spilts (4 lines)
      ".....^.^.^.....",
      "...............", // 7 spilts (8 lines)
      "....^...^......",
      "...............", // 10 spilts (12 lines)
    ];

    expect(getBeamSplitTimelinesCount(input)).toEqual(12);
  });
});
