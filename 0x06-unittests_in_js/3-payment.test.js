const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
  });

  afterEach(() => {
    calculateNumberStub.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, and 20', () => {
    calculateNumberStub.returns(120);
    sendPaymentRequestToApi(100, 20);
    assert(calculateNumberStub.calledWith('SUM', 100, 20));
  });

  it('should call Utils.calculateNumber with SUM, 0, and 0', () => {
    calculateNumberStub.returns(0);
    sendPaymentRequestToApi(0, 0);
    assert(calculateNumberStub.calledWith('SUM', 0, 0));
  });

  it('should call Utils.calculateNumber with SUM, -10, and 10', () => {
    calculateNumberStub.returns(0);
    sendPaymentRequestToApi(-10, 10);
    assert(calculateNumberStub.calledWith('SUM', -10, 10));
  });

  it('should call Utils.calculateNumber with SUM, 1.5, and 2.5', () => {
    calculateNumberStub.returns(4);
    sendPaymentRequestToApi(1.5, 2.5);
    assert(calculateNumberStub.calledWith('SUM', 1.5, 2.5));
  });

  it('should handle a different sum result', () => {
    calculateNumberStub.returns(50);
    sendPaymentRequestToApi(25, 25);
    assert(calculateNumberStub.calledWith('SUM', 25, 25));
  });

  it('should verify the console output for a specific call', () => {
    calculateNumberStub.returns(150);
    const consoleLog = sinon.stub(console, 'log');
    sendPaymentRequestToApi(100, 50);
    assert(consoleLog.calledWith('The total is: 150'));
    consoleLog.restore();
  });

  it('should verify that Utils.calculateNumber is not called for invalid inputs', () => {
    const invalidInputs = [
      [undefined, undefined],
      [null, null],
      ['string', 'string'],
    ];
    invalidInputs.forEach(([amount, shipping]) => {
      calculateNumberStub.resetHistory();
      sendPaymentRequestToApi(amount, shipping);
      assert(calculateNumberStub.notCalled);
    });
  });

  it('should call Utils.calculateNumber with SUM and handle different return values', () => {
    const testCases = [
      { a: 2, b: 3, result: 5 },
      { a: 4.4, b: 5.5, result: 10 },
      { a: -1, b: 1, result: 0 },
      { a: -1.5, b: -2.5, result: -4 },
    ];

    testCases.forEach(({ a, b, result }) => {
      calculateNumberStub.returns(result);
      sendPaymentRequestToApi(a, b);
      assert(calculateNumberStub.calledWith('SUM', a, b));
    });
  });
});
