// behind the scene node.js wrap our whole code in below function so we can use properties such as require,module etc..
// (function (exports, require, module, __filename, __dirname) {

// });

(function(){
    const name= "Vinod"
    console.log(name);
})()

console.log(__dirname);
console.log(__filename);