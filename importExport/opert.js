function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mult(a,b){
    return a*b;
}

const name = "Dhyey";

// module.exports = name
// module.exports = {add, sub, mult}
// module.exports.add1 = add;
// module.exports.sub1 = sub;
// module.exports.mult1 = mult;
module.exports = {add, sub, mult, name}