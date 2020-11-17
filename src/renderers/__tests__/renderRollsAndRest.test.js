const assert = require('assert');

const renderRollsAndRest = require('../renderRollsAndRest.js');

describe('renderRollsAndRest', function() {
  it('should render info for no input arguments', function() {
    const testRenderOutput = '- rulony: 0 - pozostałe: 0';

    assert.equal(testRenderOutput, renderRollsAndRest());
  });

  it('should render info for number arguments', function() {
    const testInputData = { coinQuantity: 94, coinNumberInRoll: 20 };
    const testRenderOutput = '- rulony: 4 - pozostałe: 14';

    assert.equal(testRenderOutput, renderRollsAndRest(testInputData));
  });

  it('should render info for string arguments', function() {
    const testInputData = { coinQuantity: '94', coinNumberInRoll: '20' };
    const testRenderOutput = '- rulony: 4 - pozostałe: 14';

    assert.equal(testRenderOutput, renderRollsAndRest(testInputData));
  });
});
