
/*
E = var | \x.E | (EE)
*/

module.exports = function() {
  function take(inputToCompare) {
    return function(inputLex) {
      if(inputToCompare === inputLex[0]) {
        return [inputLex[1]];
      } else {
        return [];
      }
    }
  }

  function produce(name, saved) {
    return [name, saved.map( i => saved[i]) ];
  }

  function ruleMathched(rule, _input) {
    let input = [..._input];
    ruleResults = [];
    for(i = 0; i < rule.length; i++) {
      let inputLex = shift(input);
      if(typeof rule[i] === "string") {
        if(rule[i] !== inputLex[0]) {
          return [];
        }
      } else if(typeof rule[i] === "function") {
        let ruleResult = rule[i](input[i]);
        if(ruleResult.length === 0) {
          return [];
        } else {
          ruleResults.push(ruleResult);
        }
      } else {
        return [];
      }
    }

    return [ruleResults, input];

  }


  function parserGenerator(rules) {
    return function(input) {
      let result = [];
      for(i = 0; i < rules.length; i++) {
        result = rules[i];
        if(result.length > 0) {
          break;
        }
      }
      return result;
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
