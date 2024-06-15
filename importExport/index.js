// const name = require('./opert') // here we can give any name
// const { add, sub, mult } = require('./opert')
// const {add1, sub1, mult1, name} = require('./opert') // here in object destructuring we have to specify same name as in module.
const { add, sub, mult, name } = require('./opert')

// console.log(name);
// console.log(add1(5,6));
// console.log(sub1(5,6));
// console.log(mult1(5,6));

console.log(add(5, 6));
console.log(sub(5,6));
console.log(mult(5,6));
console.log(name);