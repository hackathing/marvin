import test from "ava";
import marvin from ".";

test("He can talk!", async (t) => {
  t.plan(1);
  const response = await marvin({
    userName: "Tim",
    channelName: "Bots",
    text: "Hello, world!",
  });
  t.deepEqual(response, {
    text: `"Hello, world!"? What's that supposed to mean anyway?`,
  });
});
