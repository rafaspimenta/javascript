const upper = require("upper-case");

function greet(name) {
    console.log(`Hello ${upper.upperCase(name)}!`);
}

module.exports = greet;