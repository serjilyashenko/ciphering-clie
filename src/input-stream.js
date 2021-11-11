import fs from 'fs'

export function createInputStream(input) {
  if (!input) {
    return process.stdin
  }

  if (!fs.existsSync(input)) {
    throw new Error(`>> ${input} - file is not exists`)
  }

  return fs.createReadStream(input)
}
