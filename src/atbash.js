import {alphabet} from './const.js'
import {cipher} from './helper.js'

const alphabetArray = alphabet.toLowerCase().split('')

const atbashMap = Object.fromEntries(
  alphabetArray.flatMap((letter, index) => {
    const encodedLetter = alphabetArray[alphabetArray.length - 1 - index]

    return [
      [letter, encodedLetter],
      [letter.toUpperCase(), encodedLetter.toUpperCase()],
    ]
  }),
)

export function atbash(input) {
  return cipher(input, atbashMap)
}
