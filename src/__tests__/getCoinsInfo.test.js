const assert = require('assert');
const {
  emptyCoinsArray,
  smallCoinsArray,
  largeCoinsArray
} = require('../__fixtures__/inputCoins');
const {
  smallCoinsDataWithQuantity,
  largeCoinsDataWithQuantity
} = require('../__fixtures__/coinsDataWithQuantity');
const getCoinsInfo = require('../getCoinsInfo.js');
const printResult = require('../renderers/renderTipsInfo.js');
const coinsData = require('../consts/coinsData.js');

describe('getCoinsInfo', function() {
  it('should return coins info for empty tips array', function() {
    const properOutputRender = printResult();

    assert.equal(properOutputRender, getCoinsInfo(emptyCoinsArray))
  });

  it('should return coins info for each coin in tips array', function() {
    const testInputData = [1, 2, 5, 10, 20, 50];
    const testOutputData = Object.entries(coinsData).reduce((result, [key, value]) =>
      ({ ...result, [key]: { ...value, coinQuantity: 1 } })
    , {});
    const properOutputRender = printResult(testOutputData);

    assert.equal(properOutputRender, getCoinsInfo(testInputData))
  });

  it('should return proper coins info for smallCoinsArray', function() {
    const properOutputRender = printResult(smallCoinsDataWithQuantity);

    assert.equal(properOutputRender, getCoinsInfo(smallCoinsArray))
  });

  it('should return proper coins info for smallCoinsArray', function() {
    const properOutputRender = printResult(largeCoinsDataWithQuantity);

    assert.equal(properOutputRender, getCoinsInfo(largeCoinsArray))
  });
});

