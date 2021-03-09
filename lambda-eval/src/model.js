
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

  return {
    lexems,
    lexer
  };

}();
