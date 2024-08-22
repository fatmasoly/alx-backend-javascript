const chai = require('chai');
const expect = chai.expect;

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should test async with done', function (done) {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  });
});
