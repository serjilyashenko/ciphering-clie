export function cipher(input, map) {
  return input
    .split('')
    .map(letter => map[letter] || letter)
    .join('')
}
