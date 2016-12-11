export function handles() {
  return true;
}

export function call({ text }) {
  return Promise.resolve({
    text: `"${text}"? What's that supposed to mean anyway?`,
  });
}
