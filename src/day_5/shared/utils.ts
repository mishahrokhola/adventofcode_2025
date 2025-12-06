import type { Range } from "./models.ts";

export function parseRange(range: Range): [number, number] {
  const [start, end] = range.split("-") as [`${number}`, `${number}`];

  return [+start, +end];
}
