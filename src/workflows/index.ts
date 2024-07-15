export async function greet({ name }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ greeting: `Hello, ${name}!` });
    }, 20_000);
  });
}

export async function bob({ name }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello, ${name}!`);
    }, 20_000);
  });
}
