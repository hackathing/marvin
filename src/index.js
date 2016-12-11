import * as catMe from "./cat-me";
import * as catchAll from "./catch-all";

const responders = [
  catMe,
  catchAll,
];

export default function marvin(msg, env = {}) {
  const responder = responders.find(resp => resp.handles(msg));
  return responder.call(msg, env);
}
