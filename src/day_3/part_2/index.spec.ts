import { describe, it, expect } from "vitest";
import { getBatteriesSum } from "./index.ts";
import { type Bank } from "../shared/index.ts";

describe("Batteries Sum part 2", () => {
  it("basic example from adventofcode", () => {
    const ranges: Bank[] = [
      "987654321111111",
      "811111111111119",
      "234234234234278",
      "818181911112111",
    ];

    expect(getBatteriesSum(ranges)).toEqual(3121910778619);
  });
});
