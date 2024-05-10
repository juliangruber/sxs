import fs from 'node:fs/promises'
import { convert } from './convert.js'
import { parse } from 'csv-parse/sync'
import { stringify } from 'csv-stringify/sync'

const input = await fs.readFile('input.csv', 'utf16le')
const output = convert(input, parse, stringify)
console.log(output)
await fs.writeFile('output.csv', output)
