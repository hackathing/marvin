const querystring = require("querystring");

function handleMessage(event, context, callback) {
  const payload = querystring.parse(event.body);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      text: `Hi ${payload.user_name}.`
    }),
  };

  callback(null, response);
};

module.exports.handleMessage = handleMessage;
