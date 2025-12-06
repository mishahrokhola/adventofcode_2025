import type { Bank } from "./models.ts";

export function getBankBatery(range: Bank, max: number): number {
  let indexes = Array.from({ length: max }, () => 0);

  for (let _ = 0; _ < max; _++) {
    for (let i = indexes[_]!; i <= range.length + _ - max; i++) {
      if (+range[i]! > +range[indexes[_]!]!) {
        indexes[_]! = i;
      }
    }

    if (_ + 1 < max) indexes[_ + 1]! = indexes[_]! + 1; // next number should start from current number index + 1
  }

  return +indexes.map((index) => range[index]).join("");
}
