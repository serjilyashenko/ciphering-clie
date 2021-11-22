import {Command} from 'commander'

export function parseProgramOptions(argv = process.argv) {
  const program = new Command()
  program
    .requiredOption(
      '-c, --config <cipher>',
      'ciphers Config is a string with pattern {XY(-)}n, where:\n' +
        'X is a cipher mark:\n' +
        '◦ C is for Caesar cipher (with shift 1)\n' +
        '◦ A is for Atbash cipher\n' +
        '◦ R is for ROT-8 cipher\n' +
        'Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)\n' +
        '◦ 1 is for encoding\n' +
        '◦ 0 is for decoding',
    )
    .option('-i, --input <path>', 'a path to input file')
    .option('-o, --output <path>', 'a path to output file')

  program.parse(argv)
  return program.opts()
}
