
/* Run the code :
    "node directory" */

const fs = require('fs')

//Making New Directory if Exists..

/* if(!fs.existsSync('./new')){ // >> existsSync() used for check whether the file is in the directory..

    fs.mkdir('./new',(err) => {
        if(err) throw err;
        console.log("Directory created")
    })  // 'mkdir' used for making a new directory..
}
else{
    console.log("File Already Exists..")
} */

// Removing a Directory...

if(fs.existsSync('./new')){ // >> existsSync() used for check whether the file is in the directory..
    fs.rmdir('./new',(err) => { // >> 'rmdir' used for removing the directory.. 
         you
        if(err) throw err;
        console.log("Directory deleted")
    })  // 'mkdir' used for making a new directory..
}
else{
    console.log("No File Found..")
}


process.on('uncaughtException',err => {
    console.error("Uncaught Error : " + err);
    process.exit(1)
})