const emptyCalculatedCoinsQuantityData = {
  '1': { coinName: 'oneGrosz', coinQuantity: 0 },
  '2': { coinName: 'twoGrosz', coinQuantity: 0 },
  '5': { coinName: 'fiveGrosz', coinQuantity: 0 },
  '10': { coinName: 'tenGrosz', coinQuantity: 0 },
  '20': { coinName: 'twentyGrosz', coinQuantity: 0 },
  '50': { coinName: 'fiftyGrosz', coinQuantity: 0 }
}

const smallCalculatedCoinsQuantityData = {
  '1': { coinName: 'oneGrosz', coinQuantity: 3 },
  '2': { coinName: 'twoGrosz', coinQuantity: 3 },
  '5': { coinName: 'fiveGrosz', coinQuantity: 2 },
  '10': { coinName: 'tenGrosz', coinQuantity: 0 },
  '20': { coinName: 'twentyGrosz', coinQuantity: 1 },
  '50': { coinName: 'fiftyGrosz', coinQuantity: 2 }
};

const largeCalculatedCoinsQuantityData = {
  '1': { coinName: 'oneGrosz', coinQuantity: 1634 },
  '2': { coinName: 'twoGrosz', coinQuantity: 1610 },
  '5': { coinName: 'fiveGrosz', coinQuantity: 1663 },
  '10': { coinName: 'tenGrosz', coinQuantity: 1690 },
  '20': { coinName: 'twentyGrosz', coinQuantity: 1711 },
  '50': { coinName: 'fiftyGrosz', coinQuantity: 1692 }
}

module.exports = {
  emptyCalculatedCoinsQuantityData,
  smallCalculatedCoinsQuantityData,
  largeCalculatedCoinsQuantityData
};