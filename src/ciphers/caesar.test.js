import {caesar} from './caesar'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

test('Alphabet is encoded and decoded correctly with caesar +1', () => {
  const {encode, decode} = caesar(1)
  const encodedApphabet = encode(alphabet)

  expect(encodedApphabet).toBe('ZABCDEFGHIJKLMNOPQRSTUVWXY')
  expect(decode(encodedApphabet)).toBe(alphabet)
})

test('+1 is default ciphering scenario', () => {
  const {encode, decode} = caesar()
  const encodedApphabet = encode(alphabet)

  expect(encodedApphabet).toBe('ZABCDEFGHIJKLMNOPQRSTUVWXY')
  expect(decode(encodedApphabet)).toBe(alphabet)
})

test('Alphabet is encoded and decoded correctly with caesar -1', () => {
  const {encode, decode} = caesar(-1)
  const encodedApphabet = encode(alphabet)

  expect(encodedApphabet).toBe('BCDEFGHIJKLMNOPQRSTUVWXYZA')
  expect(decode(encodedApphabet)).toBe(alphabet)
})

test('Alphabet is encoded and decoded correctly with caesar +3', () => {
  const {encode, decode} = caesar(3)
  const encodedApphabet = encode(alphabet)

  expect(encodedApphabet).toBe('XYZABCDEFGHIJKLMNOPQRSTUVW')
  expect(decode(encodedApphabet)).toBe(alphabet)
})

test("It doesn'n touch numbers", () => {
  const {encode, decode} = caesar(3)
  const stringWithNumbers = 'A1B3C'
  const encodedValue = encode(stringWithNumbers)

  expect(encodedValue).toBe('X1Y3Z')
  expect(decode(encodedValue)).toBe(stringWithNumbers)
})

test("It doesn'n touch not litin letters", () => {
  const {encode, decode} = caesar(-3)
  const stringWithCyrilic = 'A1B3C'
  const encodedValue = encode(stringWithCyrilic)

  expect(encodedValue).toBe('D1E3F')
  expect(decode(encodedValue)).toBe(stringWithCyrilic)
})
