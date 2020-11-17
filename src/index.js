const getCoinsInfo = require('./getCoinsInfo.js');

const args = process.argv[2].split(',');
  
if (args[0].includes('[')) {
  args[0] = args[0].match(/\d/g).join('');
}
const intArgs = args.map(arg => Number.parseInt(arg))
  .reduce((result, item) => Number.isNaN(item) ? result : result.concat([item]), []);

if (intArgs) {
  console.log(getCoinsInfo(intArgs));
} else {
  console.log('No input arguments');
}