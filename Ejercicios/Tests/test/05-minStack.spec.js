const { expect } = require("chai");
const minStack = require("../05-Ejercicios/MinStack");

describe("minStack", function () {
  it("Chequeamos la clase constructora", () => {
    const minStack = new MinStack();
    expect(minStack).toHaveBeenCalledTimes(new Node());
  });
  it("pushes, pops, and peaks", () => {
    const minStack = new MinStack();

    minStack.push(4);
    minStack.push(1);
    minStack.push(1000);

    Test.assertEquals(minStack.peak(), 1000, "peak fails");
    Test.assertEquals(minStack.pop(), 1000, "pop fails");
    Test.assertEquals(minStack.peak(), 1, "peak fails");
    Test.assertEquals(minStack.pop(), 1, "pop fails");
    Test.assertEquals(minStack.peak(), 4, "peak fails");
    Test.assertEquals(minStack.pop(), 4, "pop fails");
  });

  it("mins!", () => {
    const minStack = new MinStack();

    minStack.push(4);
    minStack.push(1);
    minStack.push(1000);
    minStack.push(0.5);
    minStack.push(5000);
    minStack.push(0.1);

    Test.assertEquals(minStack.min(), 0.1, "min fails");
    minStack.pop();
    Test.assertEquals(minStack.min(), 0.5, "min fails");
    minStack.pop();
    Test.assertEquals(minStack.min(), 0.5, "min fails");
    minStack.pop();
    Test.assertEquals(minStack.min(), 1, "min fails");
    minStack.pop();
    Test.assertEquals(minStack.min(), 1, "min fails");
    minStack.pop();
    Test.assertEquals(minStack.min(), 4, "min fails");
  });
});
