import type { Range } from "./models.ts";

export function isIDValid(id: number): boolean {
  const strId = `${id}`;
  const isEven = strId.length % 2 === 0;

  // if number is not even we can't have reapeat
  if (!isEven) {
    return true;
  }

  const half1 = strId.substring(0, strId.length / 2);
  const half2 = strId.substring(strId.length / 2, strId.length);

  return half1 !== half2;
}

export function parseRange(range: Range): [number, number] {
  const [start, end] = range.split("-") as [`${number}`, `${number}`];

  return [+start, +end];
}
