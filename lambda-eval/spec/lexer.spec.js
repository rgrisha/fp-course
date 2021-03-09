
const model = require("../src/model");

describe("lexer", () => {

  it("has to recognize all lambda grammar characters", () => {

    expect(model.lexer("\\.a (a b)")).toEqual([["lambda"], ["dot"],["variable", "a"],["lpar"],["variable","a"],["variable","b"],["rpar"]]);   

  });

});

