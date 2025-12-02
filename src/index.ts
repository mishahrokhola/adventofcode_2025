import { main as solution1_1 } from "./day_1_1/index.ts";

async function main(): Promise<void> {
  const zeros = await solution1_1();
  console.log(`SOLUTION 1.1: ${zeros}`);
}

main();
