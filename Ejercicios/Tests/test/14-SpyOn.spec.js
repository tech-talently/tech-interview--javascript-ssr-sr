const { expect } = require("chai");
const spy = require("../Ejercicios/14-SpyOn/SpyOn");
const adder = (n1, n2) => {
  return n1 + n2;
};
const adderSpy = spy(adder);

describe("¿Es espia o no?", function () {
  it("debe retornar true", function () {
    expect(adderSpy.wasCalledWith(2)).toBe(true);
  });
  it("debe retornar true", function () {
    expect(adderSpy.returned(6)).toBe(true);
  });
  it("debe retornar false", function () {
    expect(adderSpy.wasCalledWith(0)).toBe(false);
  });
  it("debe retornar false", function () {
    expect(adderSpy.returned(9)).toBe(false);
  });
  it("debe retornar un numero", function () {
    expect(adderSpy.getCallCount()).to.equal(0);
  });
  it("debe retornar un numero", function () {
    expect(adderSpy(2, 4)).to.equal(6);
  });
  it("debe retornar un numero", function () {
    expect(adderSpy.getCallCount()).to.equal(1);
  });
  it("debe retornar un numero", function () {
    expect(adderSpy(3, 5)).to.equal(8);
  });
  it("debe retornar un numero", function () {
    expect(adderSpy.getCallCount()).to.equal(2);
  });
});
