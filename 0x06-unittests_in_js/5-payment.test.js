const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');
const { spy } = require('sinon');

describe('sendPaymentRequestToApi', function () {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should usage of the Utils', function () {
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledWith('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

  it('should verify console log', function () {
    sendPaymentRequestToApi(10, 10);

    expect(spy.calledWith('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
