export function getEnv(key) {
  const envVar = process.env[key];
  const nodeEnv = process.env.NODE_ENV;
  if (nodeEnv === "production" && !envVar) {
    throw new Error(`${key} env var not set!`);
  }
}
