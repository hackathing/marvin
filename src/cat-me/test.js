import test from "ava";
import * as catMe from ".";
import marvin from "..";

test("catMe.handles correct triggers", (t) => {
  t.plan(9);
  t.true(catMe.handles({ text: "cat me" }));
  t.true(catMe.handles({ text: "Cat me" }));
  t.true(catMe.handles({ text: "CAT ME" }));
  t.true(catMe.handles({ text: "Hey, cat me" }));
  t.false(catMe.handles({ text: "catme" }));
  t.false(catMe.handles({ text: "dog me" }));
  t.false(catMe.handles({ text: "Hey, gimmie a cat" }));
  t.false(catMe.handles({ text: "cat mean" }));
  t.false(catMe.handles({ text: "concat me" }));
});

test("catMe.call", (t) => {
  t.plan(2);
  const fetch = (url) => {
    t.is(url, "http://thecatapi.com/api/images/get?format=xml&api_key=undefined");
    const body = `<?xml version="1.0"?>
    <response>
      <data>
        <images>
          <image>
            <url>http://some.cat/image.jpg</url>
            <id>1tt</id>
            <source_url>http://thecatapi.com/?id=1tt</source_url>
          </image>
        </images>
      </data>
    </response>`;
    return Promise.resolve({ text: () => Promise.resolve(body) });
  };
  const promise = marvin({
    userName: "Mary",
    channelName: "general",
    text: "cat me!",
  }, {
    fetch, // Inject mock http client
  });
  return promise
    .then((response) => {
      t.deepEqual(response, {
        text: "Oh fine. Have this.\nhttp://some.cat/image.jpg",
      });
    });
});
