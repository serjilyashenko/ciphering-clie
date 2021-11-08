import fs from 'fs'

import {caesar} from './src/caesar.js'
import {atbash} from './src/atbash.js'
import {rot8} from './src/rot8.js'

const {encode, decode} = caesar()

console.log(atbash('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))
console.log(encode('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'))
console.log(decode('WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ'))
console.log(decode(encode('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG')))
console.log(rot8().encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))

const readStream = fs.createReadStream('./input.txt')
const writeStream = fs.createWriteStream('./output.txt')

readStream.pipe(writeStream)
