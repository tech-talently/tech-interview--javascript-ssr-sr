const { expect } = require("chai");
const BinarioADecimal = require("../Ejercicios/09-binaryToDecimal/BinaryToDecimal.js");

describe("BinarioaDecimal(num)", function () {
  it("debe retornar 2", function () {
    expect(BinarioADecimal("10")).toBe(2);
  });
  it("debe retornar 7", function () {
    expect(BinarioADecimal("111")).toBe(7);
  });
});
