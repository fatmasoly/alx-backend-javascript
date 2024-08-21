const sinon = require('sinon');

class Utils {
  static calculateNumber(type, a, b) {
    a = Math.round(a);
    b = Math.round(b);

    if (type === 'SUM') {
      return a + b;
    }

    if (type === 'SUBTRACT') {
      return a - b;
    }

    if (type === 'DIVIDE') {
      return b === 0 ? 'Error' : a / b;
    }

    return 0;
  }
}

module.exports = Utils;
