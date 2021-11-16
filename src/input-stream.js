import fs from 'fs'

export function createInputStream(input) {
  if (!input) {
    return process.stdin
  }

  if (!fs.existsSync(input)) {
    process.stderr.write(`>> ${input} - file is not exists`)
    process.exit(1)
  }

  return fs.createReadStream(input)
}
