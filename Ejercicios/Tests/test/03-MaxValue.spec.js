const { expect } = require("chai");
const mayorGanancia = require("../03-Ejercicios/MaxValue");

describe("mayorGanancia", function () {
  it("debe retornar la mayor ganancia", function () {
    let mayor = mayorGanancia([4, 3, 2, 5, 11]);
    expect(mayor).to.equal(9);
  });
  it("debe poder recibir y  sacar la mayor ganancia", function () {
    let mayor = mayorGanancia([7, "3", 4, 8, 6]);
    expect(mayor).to.equal(5);
  });
});
