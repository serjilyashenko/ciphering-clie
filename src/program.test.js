import {jest} from '@jest/globals'
import {parseProgramOptions} from './program'

jest.spyOn(process, 'exit')
jest.spyOn(process.stderr, 'write')

afterAll(() => {
  process.exit.mockRestore()
  process.stderr.write.mockRestore()
})

test('Gets correct -c option', async () => {
  const options = parseProgramOptions([
    'node',
    'lolo',
    '-c',
    'A-C1',
    '-i',
    './index.js',
  ])

  expect(options).toMatchObject({config: 'A-C1'})
})

test('Gets correct --config option', async () => {
  const options = parseProgramOptions([
    'node',
    'lolo',
    '--config',
    'A-C1',
    '-i',
    './index.js',
  ])

  expect(options).toMatchObject({config: 'A-C1'})
})

test('Throws error if I miss -c', async () => {
  process.stderr.write.mockImplementation(() => {})
  process.exit.mockImplementation(() => {})

  parseProgramOptions(['node', 'lolo', '-i', './index.js'])

  expect(process.exit).toBeCalled()
  expect(process.stderr.write).toBeCalled()
})
