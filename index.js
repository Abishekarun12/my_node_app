console.log("Hi This is from Index.js");
console.log("Hi This is a second Line");
// process.exit(0);


// ------------Cowsay-------------
// To the Terminal: "npm cowsay install"

const cowsay = require('cowsay');
console.log(cowsay.say({
    text: "Hello World!",
    e: "oO",
    T: "V "
}));

// ------------Major Commands--------------------

//npm view <package name> version   -> To get the version listing
//npm <package name>@version    -> To get the exact versioning of the package
//npm uninstall <package name> -> To uninstall the package

//-------------Export Data --------------------
const {ford,hyundai} = require("./car");
const chalk = require('chalk');
console.log(JSON.stringify(ford,null,2));
console.log(JSON.stringify(hyundai,undefined,3));