import {programOptions} from './src/program.js'
import {createCipherStream} from './src/cipher-stream.js'
import {createInputStream} from './src/input-stream.js'
import {createOutputStream} from './src/output-stream.js'

const {input, output, config} = programOptions

const inputStream = createInputStream(input).on('error', () => {
  process.stderr.write('>> ciphering error')
  process.exit(1)
})

config
  .split('-')
  .reduce(
    (stream, cipherMark) =>
      stream.pipe(createCipherStream(cipherMark)).on('error', () => {
        process.stderr.write('>> ciphering error')
        process.exit(1)
      }),
    inputStream,
  )
  .pipe(createOutputStream(output))
