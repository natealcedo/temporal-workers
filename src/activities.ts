export async function greetActivity(name: string): Promise<string> {
  return `👋 Hello, ${name}!`;
}

export async function upperCaseActivity(name: string): Promise<string> {
  return name.toUpperCase();
}
