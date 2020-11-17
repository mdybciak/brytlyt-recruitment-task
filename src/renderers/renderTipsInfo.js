const renderRollsAndRest = require('./renderRollsAndRest.js');

function renderTipsInfo(data = {}) {
  const {
    oneGrosz,
    twoGrosz,
    fiveGrosz,
    tenGrosz,
    twentyGrosz,
    fiftyGrosz
  } = data;

  return `
1. Jednogroszówki: ${renderRollsAndRest(oneGrosz)}
2. Dwugroszówki: ${renderRollsAndRest(twoGrosz)}
3. Pięciogroszówki: ${renderRollsAndRest(fiveGrosz)}
4. Dziesięciogroszówki: ${renderRollsAndRest(tenGrosz)}
5. Dwudziestogroszówki: ${renderRollsAndRest(twentyGrosz)}
6. Pięćdziesieciogroszówki: ${renderRollsAndRest(fiftyGrosz)}
`;
}

module.exports = renderTipsInfo;
