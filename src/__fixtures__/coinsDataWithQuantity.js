const emptyCoinsDataWithQuantity = {
  oneGrosz: { coinNumberInRoll: 40, coinValue: 1, coinQuantity: 0 },
  twoGrosz: { coinNumberInRoll: 40, coinValue: 2, coinQuantity: 0 },
  fiveGrosz: { coinNumberInRoll: 30, coinValue: 5, coinQuantity: 0 },
  tenGrosz: { coinNumberInRoll: 50, coinValue: 10, coinQuantity: 0 },
  twentyGrosz: { coinNumberInRoll: 20, coinValue: 20, coinQuantity: 0 },
  fiftyGrosz: { coinNumberInRoll: 40, coinValue: 50, coinQuantity: 0 }
};

const smallCoinsDataWithQuantity = {
  oneGrosz: { coinNumberInRoll: 40, coinValue: 1, coinQuantity: 3 },
  twoGrosz: { coinNumberInRoll: 40, coinValue: 2, coinQuantity: 3 },
  fiveGrosz: { coinNumberInRoll: 30, coinValue: 5, coinQuantity: 2 },
  tenGrosz: { coinNumberInRoll: 50, coinValue: 10, coinQuantity: 0 },
  twentyGrosz: { coinNumberInRoll: 20, coinValue: 20, coinQuantity: 1 },
  fiftyGrosz: { coinNumberInRoll: 40, coinValue: 50, coinQuantity: 2 }
};

const largeCoinsDataWithQuantity = {
  oneGrosz: { coinNumberInRoll: 40, coinValue: 1, coinQuantity: 1634 },
  twoGrosz: { coinNumberInRoll: 40, coinValue: 2, coinQuantity: 1610 },
  fiveGrosz: { coinNumberInRoll: 30, coinValue: 5, coinQuantity: 1663 },
  tenGrosz: { coinNumberInRoll: 50, coinValue: 10, coinQuantity: 1690 },
  twentyGrosz: { coinNumberInRoll: 20, coinValue: 20, coinQuantity: 1711 },
  fiftyGrosz: { coinNumberInRoll: 40, coinValue: 50, coinQuantity: 1692 }
};

module.exports = {
  emptyCoinsDataWithQuantity,
  smallCoinsDataWithQuantity,
  largeCoinsDataWithQuantity
};