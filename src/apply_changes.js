import 'json5' // eslint-disable-line import/no-unassigned-import

import { writeFileSync } from 'fs'
import Color from 'color-shift'
import parse from '../themes/theme'
import colors from '../themes/palette.json5'


const getDatetimeString = () =>
  `[${new Date().toLocaleTimeString()}]`

const log = (...args) =>
  console.log(getDatetimeString(), ...args) // eslint-disable-line no-console


function applyChanges () {

  log("Applying changes")

  for (var key in colors) {
    const color = Color.hex(colors[key])
    log(key.padEnd(16, ' '), color.toHex())
    colors[key] = color
  }

  const themeJSON = parse(colors)
  writeFileSync('theme.json', JSON.stringify(themeJSON, null, 2))

}

applyChanges()
