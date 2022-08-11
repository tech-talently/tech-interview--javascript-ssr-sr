const { expect } = require("chai");
const solveGraph = require("../07-Ejercicios/SolveGraph");
const graph = {
  a: ["c"],
  b: ["c"],
  c: ["s", "r"],
  d: ["a"],
  s: ["a", "c"],
  r: ["d"],
  z: ["z"],
};

describe("SolveGraph", function () {
  it("debe retornar si los vertices estan unidos", function () {
    let flag = solveGraph(graph, "a", "r");
    expect(flag).to.equal(true);
  });
  it("debe retornar si los vertices estan unidos", function () {
    let flag = solveGraph(graph, "s", "b");
    expect(flag).to.equal(false);
  });
});
