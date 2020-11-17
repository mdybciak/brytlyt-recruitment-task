const { getCoinsDataWithQuantity, calculateCoinsQuantity } = require('./coinsQuantity.js');

function getCoinData(tipCoins) {
  return getCoinsDataWithQuantity(calculateCoinsQuantity(tipCoins));
}

module.exports = getCoinData;