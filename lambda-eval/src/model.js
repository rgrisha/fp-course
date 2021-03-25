
module.exports = function() {

  const lexems = {
    lambda: c => ["\\", "λ"].includes(c) ? [["lambda"]] : undefined,
    dot: c => "." === c ? [["dot"]] : undefined,
    variable: c => c.match(/[a-z]/) ? [["variable",c]] : undefined,
    lpar: c => c === "(" ? [["lpar"]] : undefined,
    rpar: c => c === ")" ? [["rpar"]] : undefined,
    whitespace: c => [" ", "\t", "\n"].includes(c) ? [] : undefined
  };

  const lexer = require("./lexer")(lexems);

  const {take, produce, expr, parserGenerator} = require("./parser")();

/*
E = var | \x.E | (EE)
*/
  const parserRules = [
    [[take("variable")], [produce("var", [0])]],
    [["lambda", take("variable"), "dot", expr], [produce("lambda", [0,1])]],
    [["lpar", expr, expr, "rpar"], [produce("appl", [0,1])]]
  ];

  const parser = parserGenerator(parserRules);

  return {
    lexems,
    lexer,
    parser
  };

}();
