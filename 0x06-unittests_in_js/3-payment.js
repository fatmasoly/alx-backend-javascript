const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  if (typeof totalAmount !== 'number' || typeof totalShipping !== 'number') {
    console.log('Invalid inputs');
    return;
  }

  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
