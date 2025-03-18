// console.log(process.argv);

const minimist = require("minimist");

const data = process.argv.slice((2));
let name = minimist(data)

// const loop = process.argv.forEach((val,index) => {
//     console.log(`${val} : ${index}`);
// });

console.log(name.name);


//To run this script in terminal:
//1. "npm i minimist" => To install minimist package from npm and get the name from the array
//In terminal type: "node argument.js --name=abi"