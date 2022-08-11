const { expect } = require("chai");
const DecimalABinario = require("../problems/DecimalaBinario.js");

describe("DecimalABinario(num)", function () {
  it('should return "100"', function () {
    expect(DecimalABinario(4)).toBe("100");
  });
  it('should return "111"', function () {
    expect(DecimalABinario(7)).toBe("111");
  });
});
