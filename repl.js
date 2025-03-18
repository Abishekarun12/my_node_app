const repl =  require('repl');

const local = repl.start("$");

local.on('exit',() => {
    console.log("Node Console Has Been Terminated!");
    process.exit();
});