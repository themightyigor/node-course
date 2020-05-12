const { Transform } = require('stream');

module.exports = (string, maxLength) => {
  if (string.length > maxLength) {
    console.error(`Invalid string length. Maximum length is: ${maxLength}`);
    return;
  }

  class Reverse extends Transform {
    constructor() {
      super();
    }

    _transform(chunk, encoding, callback) {
      const reversed = chunk.toString().split('').reverse().join('');

      callback(null, reversed);
    }
  }

  var reverse = new Reverse();
  reverse.pipe(process.stdout);
  reverse.write(string);
  reverse.end();
};
