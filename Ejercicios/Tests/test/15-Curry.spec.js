const { expect } = require("chai");
const curry = require("../Ejercicios/15-Curry/Curry");
const calcAllFour = (var1, var2, var3, var4) => {
  return var1 + var2 - var3 * var4;
};
const curriedDoSomething = curry(calcAllFour); //argumentos -> []
const firstReturn = curriedDoSomething(1); // argumentos -> [1]
const secondReturn = firstReturn(2); // argumentos -> [1, 2]
const thirdReturn = secondReturn(3); // argumentos -> [1, 2, 3]
const fourthReturn = thirdReturn(4); // -9 -> (1 + 2 - 3 * 4)

describe("Curring", function () {
  it("debe retornar argumentos", function () {
    expect(curriedDoSomething).to.equal([]);
    expect(firstReturn).to.equal([1]);
    expect(secondReturn).to.equal([1, 2]);
    expect(thirdReturn).to.equal([1, 2, 3]);
    expect(fourthReturn).to.equal(-9);
  });
});
