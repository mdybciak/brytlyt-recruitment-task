function renderRollsAndRest({ coinQuantity = 0, coinNumberInRoll = 1 } = {}) {
  const intCoinsQuantity = Number.parseInt(coinQuantity);
  const intCoinNumberInRoll = Number.parseInt(coinNumberInRoll);
  const rolls = Math.floor(intCoinsQuantity / intCoinNumberInRoll);
  const rest = intCoinsQuantity % intCoinNumberInRoll;
  
  return `- rulony: ${rolls} - pozostałe: ${rest}`;
}

module.exports = renderRollsAndRest;
