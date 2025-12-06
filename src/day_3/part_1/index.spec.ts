import { describe, it, expect } from "vitest";
import { getBatteriesSum } from "./index.ts";
import { type Bank } from "../shared/index.ts";

describe("Batteries Sum part 1", () => {
  it("basic example from adventofcode", () => {
    const banks: Bank[] = [
      "987654321111111",
      "811111111111119",
      "234234234234278",
      "818181911112111",
    ];

    expect(getBatteriesSum(banks)).toEqual(357);
  });
});
