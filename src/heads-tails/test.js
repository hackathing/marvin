import test from "ava";
import * as headsTails from ".";
import marvin from "..";

test("headsTails.handles correct triggers", (t) => {
  t.plan(10);
  t.true(headsTails.handles({ text: "Flip it" }));
  t.true(headsTails.handles({ text: "flip it" }));
  t.true(headsTails.handles({ text: "Heads or Tails" }));
  t.true(headsTails.handles({ text: "heads or tails" }));
  t.true(headsTails.handles({ text: "Heads or tails" }));
  t.true(headsTails.handles({ text: "Flip a coin" }));
  t.true(headsTails.handles({ text: "flip a coin" }));
  t.true(headsTails.handles({ text: "Toss a coin" }));
  t.true(headsTails.handles({ text: "toss a coin" }));
  t.false(headsTails.handles({ text: "Literally anything else" }));
});

test("headsTails.call", (t) => {
  t.plan(1);
  const promise = marvin({
    userName: "Tim",
    channelName: "Bots",
    text: "Heads or Tails",
  });
  return promise
    .then((response) => {
      t.regex(response.text, /Brain the size of a planet and here I am tossing your coin\.\.\.\n(Heads|Tails)/,
      );
    });
});

