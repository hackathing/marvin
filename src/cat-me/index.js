import liveFetch from "node-fetch";
import { getEnv } from "../env";

const API_KEY = getEnv("THE_CAT_API_KEY");
const ENDPOINT = `http://thecatapi.com/api/images/get?format=xml&api_key=${API_KEY}`;

export function handles({ text }) {
  return /\bcat me\b/i.test(text);
}

export function call(msg, { fetch = liveFetch }) {
  return fetch(ENDPOINT)
    .then(response => response.text())
    .then((xml) => {
      const kitty = xml.match(/<url>(http.+)<\/url>/)[1];
      return { text: `Oh fine. Have this.\n${kitty}` };
    })
    .catch((error) => {
      console.error("Unable to reach The Cat API", (error));
      return { text: "Cats? Why would I have cats?" };
    });
}
