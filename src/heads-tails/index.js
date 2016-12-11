export function handles({ text }) {
  return /\bflip it\b/i.test(text)
    || /\bheads or tails\b/i.test(text)
    || /\bflip a coin\b/i.test(text)
    || /\btoss a coin\b/i.test(text);
}

export function call() {
  const coin = ["Heads", "Tails"];
  const headsOrTails = coin[Math.floor(Math.random() * 2)];
  return Promise.resolve({
    text: `Brain the size of a planet and here I am tossing your coin...\n${headsOrTails}`,
  });
}
