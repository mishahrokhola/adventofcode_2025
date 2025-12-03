import { main as solution1_1 } from "./day_1/part_1/index.ts";
import { main as solution1_2 } from "./day_1/part_2/index.ts";

async function main(): Promise<void> {
  const zeros1_1 = await solution1_1();
  console.log(`SOLUTION 1.1: ${zeros1_1}`);

  const zeros1_2 = await solution1_2();
  console.log(`SOLUTION 1.2: ${zeros1_2}`);
}

main();
