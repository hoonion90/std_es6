let symbol1 = Symbol('key');
let symbol2 = Symbol('key');

document.write(typeof(symbol1));
document.write("<br>");
document.write("<br>");
console.log(symbol1 = symbol2);
console.log(symbol1 == symbol2);
console.log(symbol1 == Symbol('key')); //false
console.log(symbol1 === Symbol('key')); //false
console.log(symbol1 === symbol2);
console.log(symbol1);

let obj = {};
obj[symbol1] = 'value';
obj[symbol2] = 'value';
console.log(obj[symbol1] === 'value');
console.log(obj[symbol2] === 'value');
console.log(obj[symbol1] === obj[symbol2]);