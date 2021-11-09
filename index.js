import fs from 'fs'
import {Command} from 'commander'

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

const program = new Command()
program
  .requiredOption(
    '-c, --config <cipher>',
    'ciphers Config is a string with pattern {XY(-)}n, where:\n' +
      'X is a cipher mark:\n' +
      '◦ C is for Caesar cipher (with shift 1)\n' +
      '◦ A is for Atbash cipher\n' +
      '◦ R is for ROT-8 cipher\n' +
      'Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)\n' +
      '◦ 1 is for encoding\n' +
      '◦ 0 is for decoding',
  )
  .option('-i, --input <path>', 'a path to input file')
  .option('-o, --output <path>', 'a path to output file')

program.parse()

console.log('_________')

console.log(JSON.stringify(program.opts(), null, 2))

console.log('>>', fs.existsSync('./input.txt'))
