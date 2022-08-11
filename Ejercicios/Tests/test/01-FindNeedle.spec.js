const { expect } = require("chai");
const indexArray = require("../01-Ejercicios/FindNeedle");

describe("indexArray", function () {
  it("encuentra el indice de un array en otro array", function () {
    const inicio = indexArray("react-redux", "redux");
    expect(inicio).to.equal(6);
  });
  it("si no encuenta needle dentro de haystack", function () {
    const retornar = indexArray("react-redux", "hola");
    expect(retornar).to.equal(-1);
  });
});
