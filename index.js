import {programOptions} from './src/program.js'
import {createCipherStream} from './src/cipher-stream.js'
import {createInputStream} from './src/input-stream.js'
import {createOutputStream} from './src/output-stream.js'

const {input, output, config} = programOptions

const inputStream = createInputStream(input)

config
  .split('-')
  .reduce(
    (stream, cipherMark) => stream.pipe(createCipherStream(cipherMark)),
    inputStream,
  )
  .pipe(createOutputStream(output))
