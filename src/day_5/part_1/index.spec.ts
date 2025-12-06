import { describe, it, expect } from "vitest";
import { getFreshIDsCount } from "./index.ts";
import { type Range } from "../shared/index.ts";

describe.only("Fresh IDs Count part 1", () => {
  it("basic example from adventofcode", () => {
    const ranges: Range[] = ["3-5", "10-14", "16-20", "12-18"];
    const ids = ["1", "5", "8", "11", "17", "32"] satisfies `${number}`[];

    expect(getFreshIDsCount(ranges, ids)).toEqual(3);
  });
});
