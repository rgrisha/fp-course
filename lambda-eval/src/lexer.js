
module.exports = function(lexems) {

  const lexObjs = Object.entries(lexems);

  function lexFn(acc, c) {
    for (const [lex, fn] of lexObjs) {
      let recognized = fn(c);
      if(recognized) {
        return acc.concat(recognized);
      }
    }
    return acc.concat(["error", c]);
  }

  return function(input) {

    const chars = input.split("");

    return chars.reduce(lexFn, []);
  }
}
