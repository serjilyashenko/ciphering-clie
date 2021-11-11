import {alphabet} from './const.js'
import {cipher} from './helper.js'

const alphabetArray = alphabet.toLowerCase().split('')

function createShiftMap(shift) {
  return Object.fromEntries(
    alphabetArray.flatMap((letter, index) => {
      const shiftIndex = (index + shift) % alphabetArray.length

      const encodedLetter = alphabet
        .slice(shiftIndex, shiftIndex + 1 || undefined)
        .toLowerCase()

      return [
        [letter, encodedLetter],
        [letter.toUpperCase(), encodedLetter.toUpperCase()],
      ]
    }),
  )
}

export function caesar(shift = 1) {
  const encodeMap = createShiftMap(-shift)
  const decodeMap = createShiftMap(shift)

  return {
    encode: input => cipher(input, encodeMap),
    decode: input => cipher(input, decodeMap),
  }
}
