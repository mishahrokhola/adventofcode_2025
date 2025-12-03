import { main as solution1_1 } from "./day_1/part_1/index.ts";
import { main as solution1_2 } from "./day_1/part_2/index.ts";

import { main as solution2_1 } from "./day_2/part_1/index.ts";

async function main(): Promise<void> {
  const result1_1 = await solution1_1();
  console.log(`SOLUTION 1.1: ${result1_1}`);

  const result1_2 = await solution1_2();
  console.log(`SOLUTION 1.2: ${result1_2}`);

  const result2_1 = await solution2_1();
  console.log(`SOLUTION 2.1: ${result2_1}`);
}

main();
