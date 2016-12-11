import test from "ava";
import * as catchAll from ".";
import marvin from "..";

test("catchAll.handles correct triggers", (t) => {
  t.plan(1);
  t.true(catchAll.handles({ text: "Literally anything" }));
});

test("catchAll.call", (t) => {
  t.plan(1);
  const promise = marvin({
    userName: "Tim",
    channelName: "Bots",
    text: "Hello, world!",
  });
  return promise
    .then((response) => {
      t.deepEqual(response, {
        text: "\"Hello, world!\"? What's that supposed to mean anyway?",
      });
    });
});
