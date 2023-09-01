// basic math functions
//     1) 'add()' is a valid function
//     2) 'subtract()' is a valid function
//     3) 'multiply()' is a valid function
//     4) 'divide()' is a valid function
//     5) add(a, b) adds two numbers and returns the result
//     6) subtract(a, b) subtracts b from a and returns the result
//     7) multiply(a, b) multiplies two numbers and returns the result
//     8) divide(a, b) divides a by b and returns the result
//     9) increment(n) increments n and returns the result
//     10) decrement(n) decrements n and returns the result

//   makeInt(n)
//     11) parses n as an integer and returns the parsed integer
//     12) assumes base 10
//     13) returns NaN as appropriate

//   preserveDecimal(n)
//     14) preserves n's decimals (it parses n as a floating point number) and returns the parsed number
//     15) returns NaN as appropriate

function add(a,b){return a+b}
function subtract(a,b){return a-b}
function multiply(a,b){return a*b}
function divide(a,b){return a/b}
function divide(a,b){return a/b}
function increment(a){return ++a}
function decrement(a){return --a}
function makeInt(n){return parseInt(n,10)}
function preserveDecimal(n){
    return parseFloat(n)
}