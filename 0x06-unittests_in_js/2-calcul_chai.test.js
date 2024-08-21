const chai = require('chai');
const expect = chai.expect;

const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('test sum operations', function () {
    it('SUM, positive: a and b are ints', function () {
      const result = calculateNumber('SUM', 1, 3);
      expect(result).to.equal(4);
    });

    it('SUM, positive: a is int but is float', function () {
      const result = calculateNumber('SUM', 1.44, 3);
      expect(result).to.equal(4);
    });

    it('SUM, positive: a is float but is int', function () {
      const result = calculateNumber('SUM', 1, 3.234);
      expect(result).to.equal(4);
    });

    it('SUM, positive: a and b are floats', function () {
      const result = calculateNumber('SUM', 1.233, 3.234);
      expect(result).to.equal(4);
    });

    it('SUM, negative: a and b are ints', function () {
      const result = calculateNumber('SUM', -1, -3);
      expect(result).to.equal(-4);
    });

    it('SUM, negative: a is int but is float', function () {
      const result = calculateNumber('SUM', -1.44, -3);
      expect(result).to.equal(-4);
    });

    it('SUM, negative: a is float but is int', function () {
      const result = calculateNumber('SUM', -1, -3.234);
      expect(result).to.equal(-4);
    });

    it('SUM, negative: a and b are floats', function () {
      const result = calculateNumber('SUM', -1.233, -3.234);
      expect(result).to.equal(-4);
    });

    it('SUM, positive_a, negative_b: a and b are ints', function () {
      const result = calculateNumber('SUM', 1, -3);
      expect(result).to.equal(-2);
    });

    it('SUM, positive_a, negative_b: a is int but is float', function () {
      const result = calculateNumber('SUM', 1.44, -3);
      expect(result).to.equal(-2);
    });

    it('SUM, positive_a, negative_b: a is float but is int', function () {
      const result = calculateNumber('SUM', 1, -3.234);
      expect(result).to.equal(-2);
    });

    it('SUM, positive_a, negative_b: a and b are floats', function () {
      const result = calculateNumber('SUM', 1.233, -3.234);
      expect(result).to.equal(-2);
    });

    it('SUM, negative_a positive_b: a and b are ints', function () {
      const result = calculateNumber('SUM', -1, 3);
      expect(result).to.equal(2);
    });

    it('SUM, negative_a positive_b: a is int but is float', function () {
      const result = calculateNumber('SUM', -1.44, 3);
      expect(result).to.equal(2);
    });

    it('SUM, negative_a positive_b: a is float but is int', function () {
      const result = calculateNumber('SUM', -1, 3.234);
      expect(result).to.equal(2);
    });

    it('SUM, negative_a positive_b: a and b are floats', function () {
      const result = calculateNumber('SUM', -1.233, 3.234);
      expect(result).to.equal(2);
    });
  });

  describe('test subtract operations', function () {
    it('SUBTRACT, positive: a and b are ints', function () {
      const result = calculateNumber('SUBTRACT', 1, 3);
      expect(result).to.equal(-2);
    });

    it('SUBTRACT, positive: a is int but is float', function () {
      const result = calculateNumber('SUBTRACT', 1.44, 3);
      expect(result).to.equal(-2);
    });

    it('SUBTRACT, positive: a is float but is int', function () {
      const result = calculateNumber('SUBTRACT', 1, 3.234);
      expect(result).to.equal(-2);
    });

    it('SUBTRACT, positive: a and b are floats', function () {
      const result = calculateNumber('SUBTRACT', 2.2, 3.2);
      expect(result).to.equal(-1);
    });

    it('SUBTRACT, positive: a and b are ints', function () {
      const result = calculateNumber('SUBTRACT', 4.7, 2);
      expect(result).to.equal(3);
    });

    it('SUBTRACT, negative: a and b are ints', function () {
      const result = calculateNumber('SUBTRACT', -1, -3);
      expect(result).to.equal(2);
    });

    it('SUBTRACT, negative: a is int but is float', function () {
      const result = calculateNumber('SUBTRACT', -1.44, -3);
      expect(result).to.equal(2);
    });

    it('SUBTRACT, negative: a is float but is int', function () {
      const result = calculateNumber('SUBTRACT', -1, -3.234);
      expect(result).to.equal(2);
    });

    it('SUBTRACT, negative: a and b are floats', function () {
      const result = calculateNumber('SUBTRACT', -1.233, -3.234);
      expect(result).to.equal(2);
    });

    it('SUBTRACT, positive_a, negative_b: a and b are ints', function () {
      const result = calculateNumber('SUBTRACT', 1, -3);
      expect(result).to.equal(4);
    });

    it('SUBTRACT, positive_a, negative_b: a is int but is float', function () {
      const result = calculateNumber('SUBTRACT', 1.44, -3);
      expect(result).to.equal(4);
    });

    it('SUBTRACT, positive_a, negative_b: a is float but is int', function () {
      const result = calculateNumber('SUBTRACT', 1, -3.234);
      expect(result).to.equal(4);
    });

    it('SUBTRACT, positive_a, negative_b: a and b are floats', function () {
      const result = calculateNumber('SUBTRACT', 1.233, -3.234);
      expect(result).to.equal(4);
    });

    it('SUBTRACT, negative_a positive_b: a and b are ints', function () {
      const result = calculateNumber('SUBTRACT', -1, 3);
      expect(result).to.equal(-4);
    });

    it('SUBTRACT, negative_a positive_b: a is int but is float', function () {
      const result = calculateNumber('SUBTRACT', -1.44, 3);
      expect(result).to.equal(-4);
    });

    it('SUBTRACT, negative_a positive_b: a is float but is int', function () {
      const result = calculateNumber('SUBTRACT', -1, 3.234);
      expect(result).to.equal(-4);
    });

    it('SUBTRACT, negative_a positive_b: a and b are floats', function () {
      const result = calculateNumber('SUBTRACT', -1.233, 3.234);
      expect(result).to.equal(-4);
    });
  });

  describe('test division operations', function () {
    it('DIVIDE, positive: a and b is zero', function () {
      const result = calculateNumber('DIVIDE', 1, 0);
      expect(result).to.equal('Error');
    });

    it('DIVIDE, positive: a and b are ints', function () {
      const result = calculateNumber('DIVIDE', 6.2, 3);
      expect(result).to.equal(2);
    });

    it('DIVIDE, positive: a is int but is float', function () {
      const result = calculateNumber('DIVIDE', 8.7, 3);
      expect(result).to.equal(3);
    });

    it('DIVIDE, positive: a is float but is int', function () {
      const result = calculateNumber('DIVIDE', 9, 3.234);
      expect(result).to.equal(3);
    });

    it('DIVIDE, positive: a and b are floats', function () {
      const result = calculateNumber('DIVIDE', 2.2, 1.2);
      expect(result).to.equal(2);
    });

    it('DIVIDE, positive: a and b are ints', function () {
      const result = calculateNumber('DIVIDE', 4.7, 2);
      expect(result).to.equal(2.5);
    });

    it('DIVIDE, negative: a and b are ints', function () {
      const result = calculateNumber('DIVIDE', -6, -3);
      expect(result).to.equal(2);
    });

    it('DIVIDE, negative: a is int but is float', function () {
      const result = calculateNumber('DIVIDE', -8.7, -3);
      expect(result).to.equal(3);
    });

    it('DIVIDE, negative: a is float but is int', function () {
      const result = calculateNumber('DIVIDE', 9, -3.234);
      expect(result).to.equal(-3);
    });
  });
});
