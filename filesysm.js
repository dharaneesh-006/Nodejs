
/* Run the Code:
"node filesysm" */

const fs = require('fs')
const path = require('path')

/* readFile('./files/start.txt',(err,data) => {
    if(err) throw err;
    //console.log(data); >> -- Gives the buffer code(Encoded raw data) 
    console.log(data.toString()); // >> -- Prints the Text in the File

}); */

// 'utf-8' is used for print the encoded direct content in the file (not a buffer code) & toString() not to be used.


// path.join(__dirname,'files','start.txt') finding the directory by default.
fs.readFile(path.join(__dirname,'files','start.txt'),'utf-8',(err,data) => {
    if(err) throw err;
    console.log(data); // >> -- Prints the Text in the File
});

// 'process' is available by default in node.js (no need to import it)

process.on('uncaughtException',err => {
    console.error(`Uncaught Error : ${err}`) // >>> Should use the Symbol > ` < to embed the variables,expresions of function calls.
    // -- or --
    //console.error('Uncaught Error : '+err) //can use '+' operator to concatenation
    process.exit(1)
});