const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function () {
  it('positive: a and b are ints', function () {
    const result = calculateNumber(1, 3);
    assert.equal(result, 4);
  });

  it('positive: a is int but is float', function () {
    const result = calculateNumber(1.44, 3);
    assert.equal(result, 4);
  });

  it('positive: a is float but is int', function () {
    const result = calculateNumber(1, 3.234);
    assert.equal(result, 4);
  });

  it('positive: a and b are floats', function () {
    const result = calculateNumber(1.233, 3.234);
    assert.equal(result, 4);
  });

  it('negative: a and b are ints', function () {
    const result = calculateNumber(-1, -3);
    assert.equal(result, -4);
  });

  it('negative: a is int but is float', function () {
    const result = calculateNumber(-1.44, -3);
    assert.equal(result, -4);
  });

  it('negative: a is float but is int', function () {
    const result = calculateNumber(-1, -3.234);
    assert.equal(result, -4);
  });

  it('negative: a and b are floats', function () {
    const result = calculateNumber(-1.233, -3.234);
    assert.equal(result, -4);
  });

  it('positive_a, negative_b: a and b are ints', function () {
    const result = calculateNumber(1, -3);
    assert.equal(result, -2);
  });

  it('positive_a, negative_b: a is int but is float', function () {
    const result = calculateNumber(1.44, -3);
    assert.equal(result, -2);
  });

  it('positive_a, negative_b: a is float but is int', function () {
    const result = calculateNumber(1, -3.234);
    assert.equal(result, -2);
  });

  it('positive_a, negative_b: a and b are floats', function () {
    const result = calculateNumber(1.233, -3.234);
    assert.equal(result, -2);
  });

  it('negative_a positive_b: a and b are ints', function () {
    const result = calculateNumber(-1, 3);
    assert.equal(result, 2);
  });

  it('negative_a positive_b: a is int but is float', function () {
    const result = calculateNumber(-1.44, 3);
    assert.equal(result, 2);
  });

  it('negative_a positive_b: a is float but is int', function () {
    const result = calculateNumber(-1, 3.234);
    assert.equal(result, 2);
  });

  it('negative_a positive_b: a and b are floats', function () {
    const result = calculateNumber(-1.233, 3.234);
    assert.equal(result, 2);
  });
});
