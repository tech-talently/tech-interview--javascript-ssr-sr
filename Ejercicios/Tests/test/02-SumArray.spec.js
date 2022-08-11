const { expect } = require("chai");
const Sumarray = require("../Ejercicios/02-SumArray/SumArray");

describe("Sumarray(arr, n)", function () {
  it("debe retornar true", function () {
    expect(Sumarray([2, 4, 5, 1, 3, 9, 12], 8)).toBe(true);
  });
  it("debe retornar false", function () {
    expect(Sumarray([2, 4, 5, 1, 3, 9, 12], 8)).toBe(false);
  });
});
