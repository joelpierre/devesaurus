const babelOptions = {
  presets: ['babel-preset-gatsby'],
};

module.exports = require('babel-jest/build/index').createTransformer(
  babelOptions
);
