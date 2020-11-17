const assert = require('assert');

const renderTipsInfo = require('../renderTipsInfo.js');

describe('renderTipsInfo', function() {
  it('should print info for empty tips array', function() {
    const testInputData = {};
    const testRenderOutput = `
1. Jednogroszówki: - rulony: 0 - pozostałe: 0
2. Dwugroszówki: - rulony: 0 - pozostałe: 0
3. Pięciogroszówki: - rulony: 0 - pozostałe: 0
4. Dziesięciogroszówki: - rulony: 0 - pozostałe: 0
5. Dwudziestogroszówki: - rulony: 0 - pozostałe: 0
6. Pięćdziesieciogroszówki: - rulony: 0 - pozostałe: 0
`;

    assert.equal(testRenderOutput, renderTipsInfo(testInputData));
  });
});
