
function ttt(a, b, c) {
    return "fun ttt: " + a + "-" + b + "-" + c;
}

function curry2(fn) {
    return function(a) {
        return function(b) {
            return fn.apply({}, [a, b]);
        }
    }
}

function curry(fn) {

    function curryComp(args, n) {
        if(n === 0 ) return fn.apply({}, args);

        return function(p) {
            return curryComp(args.concat(p), n-1);
        }
    }

    return curryComp([], fn.length);
}

let z = a => a + "-----" + a;


let cz = curry(ttt);

console.log("curried z: ", cz("a")("b")("c"));
console.log("curried z: ", cz("a"), cz("a")("b"));
