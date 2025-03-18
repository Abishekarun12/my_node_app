const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question(`What's your Name?`, name => {
//     console.log(`Hii ${name}`);
//     rl.close();
// });

// --------------------------------
//To the terminal: "npm i prompt-sync"
const prompt = require('prompt-sync')();

const promptname = prompt("What is your Name?");
console.log(`Hii ${promptname}`);
