import { sleep } from "@temporalio/workflow";

export async function greet(name: string): Promise<string> {
  await sleep(1000);
  return `👋 Hello, ${name}!`;
}
