async function example<T>(input: T) {
  const output: Awaited<T> = await input;
}