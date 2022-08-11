const { expect } = require("chai");
const findWSW = require("../Ejercicios/08-FindWordStartingWith");
const book = {
  id: 1,
  text:
    "Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho",
};

describe("minStack", function () {
  it("Encontrar las palabras que empiecen con", () => {
    const finder = findWSW(book, "de");
    expect(finder).to.equal([23, 112]);
  });
  it("Encontrar las palabras que empiecen con", () => {
    const finder = findWSW(book, "un");
    expect(finder).to.equal([6, 14, 43, 99, 115]);
  });
});
