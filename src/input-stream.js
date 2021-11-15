import fs from 'fs'

export function createInputStream(input) {
  if (!input) {
    return process.stdin
  }

  if (!fs.existsSync(input)) {
    console.error(`>> ${input} - file is not exists`)
    process.exit(2)
  }

  return fs.createReadStream(input)
}
