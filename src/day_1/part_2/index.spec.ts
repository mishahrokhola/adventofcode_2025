import { describe, it, expect } from "vitest";
import { getZeroCounts } from "./index.ts";
import { type Rotation } from "../shared/index.ts";

describe("getZeroCounts part 2", () => {
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

    expect(getZeroCounts(rotations)).toEqual(6);
  });

  it("custom test", () => {
    const rotations: Rotation[] = [
      "L50",
      "L100",
      "R50",
      "L50"
    ];

    expect(getZeroCounts(rotations)).toEqual(3);
  });
});
