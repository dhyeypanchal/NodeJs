const chalk = require("chalk") // i change chalk version to run this code suggested by stack overflow
const validator = require("validator")

console.log(chalk.red.underline.inverse("false"));


const res = validator.isEmail("shs@sls.com")

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));