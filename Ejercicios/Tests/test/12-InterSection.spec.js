const { expect } = require("chai");
const interSect = require("../12-InterSection/InterSection");

describe("multidimensionalArray", function () {
  it("Elementos comunes", function () {
    let resultado = interSect([1, 3, 5, 7, 10], [2, 3, 6, 8, 10, 20]);
    expect(resultado).to.equal([3, 10]);
    let resultado = interSect([1, 9, 5, 7, 11], [2, 3, 6, 8, 10, 20]);
    expect(resultado).to.equal([]);
  });
});
