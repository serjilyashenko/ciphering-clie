import {rot8} from './rot8'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

test('Alphabet is encoded and decoded correctly', () => {
  const {encode, decode} = rot8()
  const encodedApphabet = encode(alphabet)

  expect(encodedApphabet).toBe('STUVWXYZABCDEFGHIJKLMNOPQR')
  expect(decode(encodedApphabet)).toBe(alphabet)
})

test("It doesn'n touch numbers", () => {
  const {encode, decode} = rot8()
  const stringWithNumbers = 'A1B3C'
  const encodedValue = encode(stringWithNumbers)

  expect(encodedValue).toBe('S1T3U')
  expect(decode(encodedValue)).toBe(stringWithNumbers)
})

test("It doesn'n touch not litin letters", () => {
  const {encode, decode} = rot8()
  const stringWithCyrilic = 'A1B3C'
  const encodedValue = encode(stringWithCyrilic)

  expect(encodedValue).toBe('S1T3U')
  expect(decode(encodedValue)).toBe(stringWithCyrilic)
})
