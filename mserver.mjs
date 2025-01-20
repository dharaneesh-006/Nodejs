// '.mjs' help for the using 'import' and we cannot use 'import'
// Semicolon not must

/* Run the Code:
    "node mserver.mjs" */

import os from 'os';
import path from 'path';
//Normal Way
import math from './math.js';

// Required to get __filename in ESM
import { fileURLToPath } from 'url'; 

//Destructuring the math.js function
import {add,mul,mod} from './math.js';

// console.log(os.type())
console.log(os.version())
// console.log(os.homedir())

// We cannot directly use '__filename' and '__dirname' in mjs

// >>>console.log(__dirname) --directory path
// console.log(__filename) --file path

// console.log(path.dirname(__filename)) --directory
//console.log(path.basename()) // --file name
// console.log(path.extname(__filename)) -- extension (.js)
// console.log(path.parse(__filename)) --full details  <<<

//Normal
console.log(math.add(5,4))

//After De-structure
console.log(mod(10,2))

