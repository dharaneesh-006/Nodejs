/* Run the Code:
    "node server1" */

// We cannot use 'import' in this 
const os = require('os')
const path = require('path')
//Normal Way
const math = require('./math')

//Destructuring the math.js function
const {add,mul,mod} = require('./math')

/* console.log(os.type())
// console.log(os.version())
// console.log(os.homedir()) */

/* console.log(__dirname) --directory path
// console.log(__filename) --file path */

/* console.log(path.dirname(__filename)) --directory
// console.log(path.basename(__filename))--file name
// console.log(path.extname(__filename)) -- extension (.js)
// console.log(path.parse(__filename)) --full details */

//Normal : Using function from other file
// console.log(math.add(5,4))

//After De-structure : Using function from other file
// console.log(add(5,4))

