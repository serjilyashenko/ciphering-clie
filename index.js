import {caesar} from './src/caesar.js'

const {encode, decode} = caesar()

console.log(encode('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'))
console.log(decode('WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ'))
console.log(decode(encode('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG')))
