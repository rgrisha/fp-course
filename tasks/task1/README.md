
# Homework task 1. Church numerals

## Setup instructions

1. Make sure you have node.js installed
1. Open folder task1 in console (shell)
1. run `npm install`
  * This will install required packages to the project 

## Working wit task

1. When you have console open, type "npm test"
  * You will see unit tests failing
2. Start with implementing functions in src/index.js file
  * In tests, functions depend on each other, so better is to keep the order

Church numeral is lambda expression. Since it is combinator (no free variables), in JavaScript it is a function. 
_intToChurch_ is Church numeral generator - given argument n it should return 2 argument function (let's make it uncurried), that
* given any function and z (zero element) will return z if n was 0
* given any function and z will return f applied to z and f applied to result n-1 times _f(f(...[n-1 times] f(z))..)_

Implementation required is indeed very short. Few lines, sometimes even 1 line.

References:
1. https://en.wikipedia.org/wiki/Church_encoding
2. https://niltag.net/essays/church.html - spoilers here.

