import querystring from "querystring";
import marvin from ".";

// Payload properties
// - channel_id,
// - channel_name,
// - service_id,
// - team_domain,
// - team_id,
// - text,
// - timestamp,
// - token,
// - trigger_word,
// - user_id,
// - user_name,

function stripTrigger(text, trigger) {
  return text.replace(new RegExp(`${trigger} *`), "");
}

export function handleMessage(event, context, callback) {
  const {
    user_name,
    channel_name,
    text,
    trigger_word,
  } = querystring.parse(event.body);

  const response = marvin({
    userName: user_name,
    channelName: channel_name,
    text: stripTrigger(text, trigger_word),
  });

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response),
  });
}
