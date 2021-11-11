import {Transform} from 'stream'

import {atbash} from './ciphers/atbash.js'
import {caesar} from './ciphers/caesar.js'
import {rot8} from './ciphers/rot8.js'

const {encode: caesarEncode, decode: caesarDecode} = caesar()
const {encode: rot8Encode, decode: rot8Decode} = rot8()

function cipherByMark(cipherMark) {
  switch (cipherMark) {
    case 'A':
      return atbash
    case 'C0':
      return caesarEncode
    case 'C1':
      return caesarDecode
    case 'R0':
      return rot8Encode
    case 'R1':
      return rot8Decode
    default:
      throw new Error('>> wrong cipher mark')
  }
}

export function createCipherStream(cipherMark) {
  return new Transform({
    transform(chunk, encoding, callback) {
      callback(null, cipherByMark(cipherMark)(String(chunk)))
    },
  })
}
