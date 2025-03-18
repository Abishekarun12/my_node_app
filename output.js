// const x = "10";
// const y = "20";

// console.log(x,y); 

// // %s ->strinf
// // $d ->Number
// // $i ->int
// // $o ->object

// console.log("I am %s and my Age is %d",'Abishek Arunachalam',22);

// console.count("Abishek Arunachalam");
// console.count("Abishek Arunachalam");
// console.count("Abishek Arunachalam");
// console.count("Abishek");
// console.countReset("Abishek Arunachalam");
// console.count("Abishek Arunachalam");

// -----------------------------Time Checking for Processing Instruction ----------------
// const sum = () => console.log(`The Sum of 2 and 3 is ${2+3}`);
// const multiply = () => console.log(`The multiplication of 2 and 3 is ${2*3}`);

// const measureTime = () => {
//     console.time("sum()")
//     sum();
//     console.timeEnd("sum()");

//     console.time("multiply()")
//     multiply();
//     console.timeEnd("multiply()");
// }
// measureTime();

// --------------------Progress Bar ----------------

// To Terminal : "npm install progress"
const ProgressBar = require("progress");

const bar = new ProgressBar('downloading [:bar] :rate/bps :percent:etas', {
     total: 20
    });

const timer = setInterval(() =>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
},200);

// --------------------Chalk----------------=> To Produce colors
// To Terminal : "npm install chalk@4"
const chalk = require('chalk');

console.log(chalk.blue('Hello, World!'));

