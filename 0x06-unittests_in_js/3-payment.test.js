const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM, 100, and 20', () => {
    const calculateNumberStub = sinon
      .stub(Utils, 'calculateNumber')
      .returns(120);

    sendPaymentRequestToApi(100, 20);

    assert(calculateNumberStub.calledWith('SUM', 100, 20));

    calculateNumberStub.restore();
  });
});
