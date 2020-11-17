const coinsData = require('../consts/coinsData.js');

function getCoinsDataWithQuantity(coinsQuantity) {
  return Object.entries(coinsData).reduce((result, [key, value]) => {
    const { coinQuantity } = coinsQuantity[value.coinValue];

    return { ...result, [key]: { ...value, coinQuantity } }
  }, {...coinsData})
}

function calculateCoinsQuantity(coins) {
  const coinsQuantity = Object.entries(coinsData)
    .reduce((result, [key, value]) => ({...result, [value.coinValue]: { coinName: key, coinQuantity: 0  }}), {});

  coins.forEach(element => {
    if (coinsQuantity[element]) {
      coinsQuantity[element].coinQuantity += 1;
    } else {
      console.log('Incorrect coin value:', element);
    }
  });

  return coinsQuantity;
}


module.exports = {
  getCoinsDataWithQuantity,
  calculateCoinsQuantity
}