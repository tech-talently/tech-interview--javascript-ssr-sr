const { expect } = require("chai");
const multidimensionalArray = require("../04-Ejercicios/MultidimensionalSumArray");

describe("multidimensionalArray", function () {
  it("describe la funcion para encontrar la suma de cada elemento del arreglo", function () {
    let resultado = multidimensionalArray([1, 2, 3, 4]);
    expect(resultado).to.equal(10);
  });
  it("suma de array con subArray", function () {
    let resultado = multidimensionalArray([[2, 4], [1], [4, 2, 1]]);
    expect(resultado).to.equal(14);
  });
  it("suma de array con otro sub array, dentro de un sub array", function () {
    let resultado = multidimensionalArray([2, [3, 4], 5, [-3, [6, [4, 5]]]]);
    expect(resultado).to.equal(26);
  });
});
