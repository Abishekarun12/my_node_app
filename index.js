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
