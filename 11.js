const path = require("path")

console.log(path.dirname("C:/Users/DHYEY PANCHAL/OneDrive/Desktop/NodeJs/11.js"));
console.log(path.extname("C:/Users/DHYEY PANCHAL/OneDrive/Desktop/NodeJs/11.js"));
console.log(path. basename("C:/Users/DHYEY PANCHAL/OneDrive/Desktop/NodeJs/11.js"));

const myPath = path.parse("C:/Users/DHYEY PANCHAL/OneDrive/Desktop/NodeJs/11.js");
console.log(myPath.root);