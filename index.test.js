import util from 'util'
import childProcess from 'child_process'

const exec = util.promisify(childProcess.exec)

test('Ciphers from file to console', async () => {
  const {stdout} = await exec(
    'node ./index.js -c A-A -i __fixtures__/input.txt',
  )

  expect(stdout).toBe('This is secret. Message about "_" symbol!\n')
})

test('Throws error if I miss -c', async () => {
  try {
    await exec('node ./index.js -i __fixtures__/input.txt')
  } catch (error) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(error.message).toContain('-c')
    // eslint-disable-next-line jest/no-conditional-expect
    expect(error.message).toContain('--config')
  }
})
