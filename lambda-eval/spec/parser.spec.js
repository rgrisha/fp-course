const parser = require("../src/model").parser;

describe("parser must parse", () => {
  it("variable", () => {
    console.log("-------------> ", JSON.stringify( parser([["variable", "x"]])));
    expect(parser([["variable", "x"]])).toEqual(["var", "x"]);
  });

  it("lambda", () => {
    // \x.y
    expect(parser([["lambda"],["variable", "x"],["dot"],["variable","y"]])).toEqual(["lambda", ["x", ["var", "y"]]]);
  });
  /*
  it("lambda in lambda", () => {
    // \x.\y.z -> \xy.z
    expect(parser([["lambda"],["variable", "x"],["dot"],["lambda"],["variable","y"],["dot"],["variable","z"]]))
      .toEqual(["lambda", ["x", ["lambda", ["y", ["var", "z"]]]]]);
  });

  it("application", () => {
    expect(parser([["lpar"],["lambda"],["variable","x"],["dot"],["variable","z"],["variable","y"],["rpar"]]))
      .toEqual(["appl", [ ["lambda", ["x", ["var", "z" ]]], ["var", "y"] ]]);

  });
  */
});
