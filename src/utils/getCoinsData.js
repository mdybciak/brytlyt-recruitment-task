const { getCoinsDataWithQuantity, calculateCoinsQuantity } = require('./coinsQuantity.js');

function getCoinData(tipCoins) {
  console.log('getCoinsDataWithQuantity(calculateCoinsQuantity(tipCoins))', getCoinsDataWithQuantity(calculateCoinsQuantity(tipCoins)));
  return getCoinsDataWithQuantity(calculateCoinsQuantity(tipCoins));
}

module.exports = getCoinData;