const Color   = require('color-shift').default
const path    = require('path')
const fs      = require('fs')



const getColorStringMatchingRegex = () =>
  /"([^\w]([\da-f]{6}))"(?!:)/ig


function getThemeFileContents (filename) {
  const filepath = path.join(__dirname, '..',  'themes', filename)
  console.log(filepath)
  return fs.readFileSync(filepath, 'utf8')
}


function getColorsFromTheme (filename='High Hopes.color-theme.json') {
  const contents    = getThemeFileContents(filename)
  const matchColor  = getColorStringMatchingRegex()
  const matches     = new Set()
  const opacities   = new Map()

  let iterator
  while (iterator !== null) {
    iterator = matchColor.exec(contents)
    iterator && matches.add(Color.hex(iterator[1]))
  }

  return Array
    .from(matches)
    .sort(sortBy('hue', 'luminance'))
}


const sortBy = (p1, p2) => (a, b) => {
  if (a[p1] > b[p1])
    return 1
  if (a[p1] < b[p1])
    return -1
  if (a[p2] > b[p2])
    return 1
  if (a[p2] < b[p2])
    return -1
  return 0
}


module.exports = getColorsFromTheme
