// bigquery json (to google drive) does not have entries as an array, may still need manual love
import { program } from 'commander'
import fs from 'fs'

program
  .version('0.0.0')
  .requiredOption(
    '-i, --input <path>',
    'input JSON file location containing a map of account addresses to string balances'
  )

program.parse(process.argv)

const result = fs
  .readFileSync(program.input, { encoding: 'utf8' })
  .split(/\r?\n/)
  .reduce((lines: Array<string>, line) => {
    if (line != '') {
      lines.push(line)
    }
    return lines
  }, [])
  .join(',\n')

console.log('[')
console.log(result)
console.log(']')
