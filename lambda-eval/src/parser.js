
/*
E = var | \x.E | (EE)
*/

module.exports = function() {
  function take(inputToCompare) {
    return function(inputLex) {
      if(inputToCompare === inputLex[0]) {
        return inputLex[1];
      } else {
        return false;
      }
    }
  }

  function produce(name, indexes) {
    return function(saved) {
      return [name, ... indexes.map( i => saved[i]) ];
    }
  }

  function ruleMatched(rule, _input) {
    let input = [..._input];
    let result = [];
    //console.log("rule ", rule, _input, rule.length);
    for(let i = 0; i < rule.length; i++) {
      let inp = input.shift();

      if(typeof rule[i] === "string") {
        if(rule[i] !== inp) {
          return false;
        }
      } else if(typeof rule[i] === "function") {
        let fnResult = rule[i](inp);
        if(fnResult) {
          result.push(fnResult);
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    //console.log("returning ", result);
    return [result, input];
  }


  function parserGenerator(rules) {
    return function(_input) {
      let input = [..._input];
      for(let i = 0; i < rules.length; i++) {
        let result = ruleMatched(rules[i][0], input);
        if(result) {
          console.log("result", result);
          return rules[i][1](result[0]);
        }
      }
    }
  }

  function expr() {
  }

  return {
    take,
    produce,
    expr,
    parserGenerator
  };


}
