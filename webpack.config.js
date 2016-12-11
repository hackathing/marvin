module.exports = { // eslint-disable-line immutable/no-mutation
  entry: [
    "babel-polyfill",
    "./src/lambda.js",
  ],
  target: "node",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
