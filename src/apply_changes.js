require('json5/lib/register')

const path    = require('path')
const fs      = require('fs')
const Color   = require('color-shift').default
const parse   = require('../themes/theme')
const colors  = require('../themes/palette.json5')


const getDatetimeString = () =>
  `[${new Date().toLocaleTimeString()}]`

const log = (...args) =>
  console.log(getDatetimeString(), ...args)


function applyChanges () {

  log("Applying changes")

  for (let key in colors) {
    const color = Color.hex(colors[key])
    log(key.padEnd(16, ' '), color.toHex())
    colors[key] = color
  }

  const themeJSON = parse(colors)
  fs.writeFileSync('theme.json', JSON.stringify(themeJSON, null, 2))

}

applyChanges()
