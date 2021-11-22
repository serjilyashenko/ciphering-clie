import {pipeline} from 'stream'
import {parseProgramOptions} from './src/program.js'
import {createCipherStream} from './src/cipher-stream.js'
import {createInputStream} from './src/input-stream.js'
import {createOutputStream} from './src/output-stream.js'

const {input, output, config} = parseProgramOptions()

pipeline(
  createInputStream(input),
  ...config.split('-').map(createCipherStream),
  createOutputStream(output),
  error => {
    if (error) {
      process.stderr.write('>> cipher errro: ', error)
      process.exit(1)
    }
  },
)
