const renderTipsInfo = require('./renderers/renderTipsInfo.js');
const getCoinsData = require('./utils/getCoinsData.js');

function getCoinsInfo(tipCoins) {
  const coinsData = getCoinsData(tipCoins);

  return renderTipsInfo(coinsData);
}

module.exports = getCoinsInfo;
