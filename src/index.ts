import { main as solution1_1 } from "./day_1/part_1/index.ts";
import { main as solution1_2 } from "./day_1/part_2/index.ts";

import { main as solution2_1 } from "./day_2/part_1/index.ts";
import { main as solution2_2 } from "./day_2/part_2/index.ts";

import { main as solution3_1 } from "./day_3/part_1/index.ts";
import { main as solution3_2 } from "./day_3/part_2/index.ts";

import { main as solution4_1 } from "./day_4/part_1/index.ts";
import { main as solution4_2 } from "./day_4/part_2/index.ts";

import { main as solution5_1 } from "./day_5/part_1/index.ts";
// import { main as solution5_2 } from "./day_5/part_2/index.ts";

async function main(): Promise<void> {
  const result1_1 = await solution1_1();
  console.log(`SOLUTION 1.1: ${result1_1}`);

  const result1_2 = await solution1_2();
  console.log(`SOLUTION 1.2: ${result1_2}`);

  const result2_1 = await solution2_1();
  console.log(`SOLUTION 2.1: ${result2_1}`);

  const result2_2 = await solution2_2();
  console.log(`SOLUTION 2.2: ${result2_2}`);

  const result3_1 = await solution3_1();
  console.log(`SOLUTION 3.1: ${result3_1}`);

  const result3_2 = await solution3_2();
  console.log(`SOLUTION 3.2: ${result3_2}`);

  const result4_1 = await solution4_1();
  console.log(`SOLUTION 4.1: ${result4_1}`);

  const result4_2 = await solution4_2();
  console.log(`SOLUTION 4.2: ${result4_2}`);

  const result5_1 = await solution5_1();
  console.log(`SOLUTION 5.1: ${result5_1}`);

  // const result5_2 = await solution5_2();
  // console.log(`SOLUTION 5.2: ${result5_2}`);
}

main();
