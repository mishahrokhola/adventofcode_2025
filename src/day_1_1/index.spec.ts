import { describe, it, expect } from "vitest";
import { getZeroCounts, type Rotation } from "./index";

describe("getZeroCounts", () => {
  it("basic example from adventofcode", () => {
    const rotations: Rotation[] = [
      "L68",
      "L30",
      "R48",
      "L5",
      "R60",
      "L55",
      "L1",
      "L99",
      "R14",
      "L82",
    ];

    expect(getZeroCounts(rotations)).toEqual(3);
  });
});
