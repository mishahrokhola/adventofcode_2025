import { DIAL_MAX } from "./constants.ts";
import type { Rotation } from "./models.ts";

/**
 * Rotates dial from current number to either left or right
 *
 * @returns A [new dial number, zero crossed times]
 */
export function rotate(current: number, rotation: Rotation): [number, number] {
  const [direction, number] = getRotationData(rotation);
  const actualRotate = number % DIAL_MAX; // if DIAL_MAX 100: 626 => 26
  const fullRotateCount = Math.trunc(number / 100); // if DIAL_MAX 100: 626 => 6
  const zeroStartRotation = current === 0 ? 0 : 1;

  if (actualRotate === 0) {
    const zeroEndRotation = current === 0 ? 1 : 0;

    return [current, fullRotateCount - 1 + zeroStartRotation + zeroEndRotation];
  }

  if (direction === "L") {
    const newCurrent = current - actualRotate;
    const zeroEndRotation = newCurrent === 0 ? 1 : 0;

    return newCurrent < 0
      ? [DIAL_MAX + newCurrent, fullRotateCount + zeroStartRotation]
      : [newCurrent, fullRotateCount + zeroEndRotation];
  }

  const newCurrent = current + actualRotate;
  const zeroEndRotation = newCurrent === 0 ? 1 : 0;

  return newCurrent > DIAL_MAX - 1
    ? [newCurrent - DIAL_MAX, fullRotateCount + zeroStartRotation]
    : [newCurrent, fullRotateCount + zeroEndRotation];
}

export function getRotationData(rotation: Rotation): ["L" | "R", number] {
  const direction = rotation[0] as "L" | "R";
  const number = +rotation.slice(1);

  return [direction, number];
}
