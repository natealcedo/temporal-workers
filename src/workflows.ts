import { sleep } from "@temporalio/workflow";

import * as activities from "./activities";

export async function greet(name: string): Promise<string> {
  await sleep(1000);
  const greeting = await activities.greetActivity(name);
  return activities.upperCaseActivity(greeting);
}

export async function bob(name: string): Promise<string> {
  await sleep(1000);
  return `👋 Hello, ${name}! From bob`;
}
