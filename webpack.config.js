module.exports = { // eslint-disable-line immutable/no-mutation
  entry: [
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
      {
        test: /\.json$/,
        loader: "json-loader",
      },
    ],
  },
};
