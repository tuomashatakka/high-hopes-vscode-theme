require('json5/lib/register')

const Color   = require('color-shift').default
const parse   = require('./themes/theme')
const colors  = require('./themes/palette.json5')
const path    = require('path')
const fs      = require('fs')

const result = parse(colors)
console.log(result)
fs.writeFileSync('./theme.json', JSON.stringify(result, null, 2))


const matchColor = /"([^\w]([\da-f]{6}))([\da-f]{2})?"(?!:)/ig


function getThemeFileContents (filename='High Hopes.color-theme.json') {
  return fs.readFileSync(path.join('themes', filename), 'utf8')
}


const nord = getThemeFileContents('nord.json')
const theme = JSON.parse(getThemeFileContents())

let iterator

const matches   = new Set()
const opacities = new Map()

while (iterator !== null) {
  iterator = matchColor.exec(nord)
  iterator && matches.add(iterator[1].toLowerCase())
}


const sortBy = (p1, p2) => (a, b) => {

  a = Color.hex(a)
  b = Color.hex(b)


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

const sorted = Array.from(matches)
  .sort(sortBy('hue', 'luminance'))



fs.writeFileSync("asd.json", JSON.stringify(theme, null, 2), 'utf8')

// #000000 #bbbbbb #ffffff #c17e70 #f78c6c #ffcb6b #c3e88d #eeffff #b2ccd6 #89ddff #546e7a #007acc #65737e #82aaff #2c2c31 #5852ef #c792ea #ff5370 #f07178
// #000000 #525252 #606060 #7c7c7c #808080 #848484 #a0a0a0 #bbbbbb #c5c5c5 #e7e7e7 #ffffff #e51400 #be1100 #f48771 #d08770 #653723 #ee9d28 #ebcb8b #ffcc00 #b89500 #ffff00 #587c0c #a3be8c #89d185 #7abd7a #81b88b #8fbcbb #0c7d9d #88c0d0 #3399cc #75beff #264f78 #81a1c1 #157efb #5e81ac #eceff4 #e5e9f0 #d8dee9 #2e3440 #4c566a #616e88 #434c5e #3b4252 #474f62 #f5f6f9 #b180d7 #b48ead #ff1242 #bf616a #94151b
git status
