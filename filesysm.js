
/* Run the Code:
"node filesysm" */

const fs = require('fs') // No need when 'fspromises' were used.
const path = require('path') // Used for getting the paths
const fsPromises = require('fs').promises // Or we can use 'fs/promises'

// To read a file use 'readFile'
/* readFile('./files/start.txt',(err,data) => {
    if(err) throw err;
    //console.log(data); >> -- Gives the buffer code(Encoded raw data) 
    console.log(data.toString()); // >> -- Prints the Text in the File

}); */


// 'utf-8' is used for print the encoded direct content in the file (not a buffer code) & toString() not to be used.


// path.join(__dirname,'files','start.txt') finding the directory by default.
// fs.readFile(path.join(__dirname,'files','start.txt'),'utf-8',(err,data) => {
//     if(err) throw err;
//     console.log(data); // >> -- Prints the Text in the File
// });


// To Write a File use "writeFile"

// fs.writeFile(path.join(__dirname,'files','write.txt'),'This Is the Sample for Writing the content in a file..',(err) => {
//     if(err) throw err;
//     console.log("Writing Completed"); // >> -- Prints the Text in the File

    // >> Append anything in a file use "appendFile"
    //>> Append can also used to create a file if not available.

//     fs.appendFile(path.join(__dirname,'files','write.txt'),'\nI have Successfully appended the content in a file ..',(err) => {
//         if(err) throw err;
//         console.log("Append Completed"); // >> Prints the Text in the File
//     });

//     // >>Renaming any file use "rename"

//     fs.rename(path.join(__dirname,'files','write.txt'), path.join(__dirname,'files','rename.txt'),(err) => {
//         if(err) throw err;
//         console.log("Renaming Completed"); // >> -- Prints the Text in the File
//     });
// });

//using await
const fileOps = async() => {
    try{
        //reading
        const data = await fsPromises.readFile(path.join(__dirname,'files','start.txt'),'utf-8');
        console.log(data);

        //writing
        await fsPromises.writeFile(path.join(__dirname,'files','write.txt'),'This Is the Sample for Writing the content in a file..')
        console.log("Writing Completed")

        //appending
        await fsPromises.appendFile(path.join(__dirname,'files','write.txt'),'\nI have Successfully appended the content in a file using await ..')
        console.log("Appending Completed")

        //renaming
        await fsPromises.rename(path.join(__dirname,'files','write.txt'), path.join(__dirname,'files','rename.txt'))
        console.log("Renaming Completed");

        //deleting  >> 'unlink' is used for deletion of a file.
        await fs.promises.unlink(path.join(__dirname,'files','rename.txt'))
        console.log("Deletion Completed")

    }catch(err)
    {
        console.error(err)
    }
}

fileOps();

// 'process' is available by default in node.js (no need to import it)
process.on('uncaughtException',err => {
    console.error(`Uncaught Error : ${err}`) // >>> Should use the Symbol > ` < to embed the variables,expresions of function calls.
    // -- or --
    // >>can also use '+' operator to concatenation
    //console.error('Uncaught Error : '+err) 
    process.exit(1)
});