import { describe, it, expect } from "vitest";
import { getAllFreshIDsCount } from "./index.ts";
import { type Range } from "../shared/index.ts";

describe("Fresh IDs Count part 1", () => {
  it("basic example from adventofcode", () => {
    const ranges: Range[] = ["3-5", "10-14", "16-20", "12-18"];

    expect(getAllFreshIDsCount(ranges)).toEqual(14);
  });
});
