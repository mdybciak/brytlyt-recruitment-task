const assert = require('assert');

const {
  smallCoinsArray,
  largeCoinsArray
} = require('../../__fixtures__/inputCoins');
const {
  emptyCalculatedCoinsQuantityData,
  smallCalculatedCoinsQuantityData,
  largeCalculatedCoinsQuantityData
} = require('../../__fixtures__/calculatedCoinsQuantity');
const {
  emptyCoinsDataWithQuantity,
  smallCoinsDataWithQuantity,
  largeCoinsDataWithQuantity
} = require('../../__fixtures__/coinsDataWithQuantity');

const { getCoinsDataWithQuantity, calculateCoinsQuantity } = require('../coinsQuantity.js');

describe('coinsQuantity', function() {
  describe('calculateCoinsQuantity', function() {
    it('should return proper data for call with empty array', function() {
      const testInputArray = [];
      const testOutputData = JSON.stringify(emptyCalculatedCoinsQuantityData);
      const calculatedTestData = JSON.stringify(calculateCoinsQuantity(testInputArray));

      assert.equal(testOutputData, calculatedTestData);
    });

    it('should return proper data for call with smallCoinsArray', function() {
      const testOutputData = JSON.stringify(smallCalculatedCoinsQuantityData);
      const calculatedTestData = JSON.stringify(calculateCoinsQuantity(smallCoinsArray));

      assert.equal(testOutputData, calculatedTestData);
    });

    it('should return proper data for call with largeCoinsArray', function() {
      const testOutputData = JSON.stringify(largeCalculatedCoinsQuantityData);
      const calculatedTestData = JSON.stringify(calculateCoinsQuantity(largeCoinsArray));

      assert.equal(testOutputData, calculatedTestData);
    });
  });

  describe('getCoinsDataWithQuantity', function() {
    it('should return proper data for call with empty object', function() {
      const testInputData = {};
      const testOutputData = JSON.stringify(emptyCoinsDataWithQuantity);
      const coinsTestDataWithQuantity = JSON.stringify(getCoinsDataWithQuantity(emptyCalculatedCoinsQuantityData));

      assert.equal(testOutputData, coinsTestDataWithQuantity);
    });
  
    it('should return proper data for call with smallCoinsArray', function() {
      const testOutputData = JSON.stringify(smallCoinsDataWithQuantity);
      const coinsTestDataWithQuantity = JSON.stringify(getCoinsDataWithQuantity(smallCalculatedCoinsQuantityData));

      assert.equal(testOutputData, coinsTestDataWithQuantity);
    });

    it('should return proper data for call with largeCoinsArray', function() {
      const testOutputData = JSON.stringify(largeCoinsDataWithQuantity);
      const coinsTestDataWithQuantity = JSON.stringify(getCoinsDataWithQuantity(largeCalculatedCoinsQuantityData));

      assert.equal(testOutputData, coinsTestDataWithQuantity);
    });
  });
});
