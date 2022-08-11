const { expect } = require("chai");
const validatorBracket = require("../06-Ejercicios/HasBalanceBrackets");

describe("validatorBacket", function () {
  it("", function () {
    const resultado = validatorBracket("{[],()}");
    expect(resultado).to.equal(true);
  });
  it("", function () {
    const resultado = validatorBracket("{[(])}");
    expect(resultado).to.equal(false);
  });
  it("", function () {
    const resultado = validatorBracket("{[(");
    expect(resultado).to.equal(false);
  });
  it("", function () {
    const resultado = validatorBracket("{[([{()[]{}}])]}");
    expect(resultado).to.equal(true);
  });
});
