
/* Run the code :
    "node stream" */

const fs = require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname,'files','big.txt'),{encoding: 'utf8'})
const ws = fs.createWriteStream(path.join(__dirname,'files','new_big.txt'))

/* rs.on('data',(datachunk) => { 
    ws.write(datachunk)
})  // >>DataChunk seperation of datas into multiple small data.. */

// Efficient Way :
rs.pipe(ws)