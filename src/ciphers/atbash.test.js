import {atbash} from './atbash'

test('Alphabet is ciphered correctly', () => {
  expect(atbash('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(
    'ZYXWVUTSRQPONMLKJIHGFEDCBA',
  )
})

test("It doesn'n encode numbers", () => {
  expect(atbash('A1B3C')).toBe('Z1Y3X')
})

test("It doesn'n encode not litin letters", () => {
  expect(atbash('ABC ло-ло-ло')).toBe('ZYX ло-ло-ло')
})

test('Encode random string and decode back', () => {
  const randomString = 'This is secret. Message about "_" symbol!'
  const encodedString = atbash(randomString)
  expect(encodedString).toBe('Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!')
  expect(atbash(encodedString)).toBe(randomString)
})
