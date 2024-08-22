const request = require('request');

const chai = require('chai');
const expect = chai.expect;

describe('getRequest', function () {
  it('should get index page', function (done) {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
