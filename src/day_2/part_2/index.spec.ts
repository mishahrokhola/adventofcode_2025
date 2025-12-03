import { describe, it, expect } from "vitest";
import { getInvalidIDsSum, isEqualParts, splitByLength } from "./index.ts";
import { type Range } from "../shared/index.ts";

describe("Invalid IDs Sum part 2", () => {
  it("basic example from adventofcode", () => {
    const ranges: Range[] = [
      "11-22",
      "95-115",
      "998-1012",
      "1188511880-1188511890",
      "222220-222224",
      "1698522-1698528",
      "446443-446449",
      "38593856-38593862",
      "565653-565659",
      "824824821-824824827",
      "2121212118-2121212124",
    ];

    expect(getInvalidIDsSum(ranges)).toEqual(4174379265);
  });
});

describe("Invalid IDs Sum part 2 Utils", () => {
  it("splitByLength", () => {
    expect(splitByLength("1212121212", 5)).toEqual(["12121", "21212"]);
    expect(splitByLength("1212121212", 2)).toEqual(["12", "12", "12", "12", "12"]);
  });

  it("isEqualParts", () => {
    expect(isEqualParts(["12121", "21212"])).toBe(false);
    expect(isEqualParts(["12", "12", "12", "12", "12"])).toBe(true);
  });
});
