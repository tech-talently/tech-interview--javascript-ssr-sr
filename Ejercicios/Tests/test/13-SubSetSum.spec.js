const { expect } = require("chai");
const subSetSum = require("../13-SubSetSum/SubSetSum");

describe("multidimensionalArray", function () {
  it("Suma subconjunto", function () {
    let resultado = subSetSum(9, [1, 10, 5, 3]);
    expect(resultado).toBe(true);
    let resultado = subSetSum(19, [1, 10, 5, 3]);
    expect(resultado).to.toBe(true);
    let resultado = subSetSum(17, [1, 10, 5, 3]);
    expect(resultado).to.toBe(false);
    let resultado = subSetSum(2, [1, 10, 5, 3]);
    expect(resultado).to.toBe(false);
    let resultado = subSetSum(10, [1, 10, 5, 3]);
    expect(resultado).to.toBe(true);
  });
});
