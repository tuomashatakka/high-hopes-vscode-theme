/* eslint-disable no-console, max-len */
import 'json5' // eslint-disable-line import/no-unassigned-import

import { spawn } from 'child_process'
import { join, dirname  } from 'path'
import { fileURLToPath } from 'url'
import { watch } from 'fs'

global.__filename = fileURLToPath(import.meta.url)
global.__dirname  = dirname(global.__filename)

function applyChanges () {
  const proc = spawn('node', [ './src/apply_changes.js' ])

  proc.stdout.on('data', (data) =>
    console.log(`[STDOUT] ${data}`))

  proc.stderr.on('data', (data) =>
    console.error(`[EXCEPT]: ${data}`))

  proc.on('close', (code) =>
    console.log(`[FINISH] ${code}`))

}


const paths = [
  join(__dirname, 'src'),
  join(__dirname, 'themes'),
  join(__dirname, 'server.mjs'),
]

for (var filepath of paths)
  watch(filepath, 'utf8', applyChanges)

applyChanges()

// const nord = getColorsFromTheme('nord-by-color.json')
// const nordContent = fs.readFileSync(path.join('themes', 'nord-by-color.json'), 'utf8')

// console.log("NORD COLORS:", nord)
// // console.log(result)


// const result = replaceColors(nordContent, colors)
// console.log(result)
// fs.writeFileSync('./theme.json', result)

// #000000 #bbbbbb #ffffff #c17e70 #f78c6c #ffcb6b #c3e88d #eeffff #b2ccd6 #89ddff #546e7a #007acc #65737e #82aaff #2c2c31 #5852ef #c792ea #ff5370 #f07178
// #000000 #525252 #606060 #7c7c7c #808080 #848484 #a0a0a0 #bbbbbb #c5c5c5 #e7e7e7 #ffffff #e51400 #be1100 #f48771 #d08770 #653723 #ee9d28 #ebcb8b #ffcc00 #b89500 #ffff00 #587c0c #a3be8c #89d185 #7abd7a #81b88b #8fbcbb #0c7d9d #88c0d0 #3399cc #75beff #264f78 #81a1c1 #157efb #5e81ac #eceff4 #e5e9f0 #d8dee9 #2e3440 #4c566a #616e88 #434c5e #3b4252 #474f62 #f5f6f9 #b180d7 #b48ead #ff1242 #bf616a #94151b


// function replaceColors (content, context) {


//   const replacements = {
//     '#2e3440': context.background.hex,
//     '#3b4252': context.background.mix(context.foreground, 0.1).hex,
//     '#434c5e': context.background.mix(context.foreground, 0.15).hex,
//     '#474f62': context.background.mix(context.foreground, 0.3).hex,
//     '#4c566a': context.background.mix(context.foreground, 0.5).hex,
//     '#616e88': context.background.mix(context.foreground, 0.7).hex,
//     '#5e81ac': context.medium.mix(context.foreground, 0.5).hex,
//     '#81a1c1': context.medium.lighten(0.3).mix(context.foreground, 0.5).hex,
//     '#d8dee9': context.foreground.mix(context.background, 0.3).hex,
//     '#e5e9f0': context.foreground.mix(context.background, 0.2).hex,
//     '#eceff4': context.foreground.mix(context.background, 0.1).hex,
//     '#f5f6f9': context.foreground.lighten(0.85).hex,

//     '#000000': context.background.mix('#000000').hex,
//     '#525252': context.background.lighten(0.1).hex,
//     '#606060': context.background.lighten(0.2).hex,
//     '#7c7c7c': context.background.lighten(0.3).hex,
//     '#808080': context.background.lighten(0.4).hex,
//     '#848484': context.background.lighten(0.5).hex,
//     '#a0a0a0': context.background.lighten(0.6).hex,
//     '#bbbbbb': context.background.lighten(0.7).hex,
//     '#c5c5c5': context.background.lighten(0.8).hex,
//     '#e7e7e7': context.background.lighten(0.9).hex,
//     '#ffffff': context.foreground.hex,

//     '#bf616a': context.red.setSaturation(0.65).setLuminance(0.6).hex,
//     '#94151b': context.red.setLuminance(0.3).hex,
//     '#ff1212': context.red.setSaturation(1).setLuminance(0.5).hex,
//     '#e51400': context.red.setSaturation(0.7).setLuminance(0.5).hex,
//     '#be1100': context.red.setSaturation(0.3).setLuminance(0.5).hex,
//     '#f48771': context.red.setSaturation(0.4).setLuminance(0.65).hex,
//     '#d08770': context.red.setSaturation(0.1).setLuminance(0.75).hex,
//     '#653723': context.orange.mix(context.red).hex,
//     '#ee9d28': context.orange.hex,
//     '#ebcb8b': context.orange.hex,
//     '#ffcc00': context.orange.hex,
//     '#b89500': context.orange.hex,
//     '#ffff00': context.yellow.hex,
//     '#587c0c': context.green.mix(context.yellow, 0.2).hex,
//     '#a3be8c': context.green.mix(context.yellow, 0.2).setSaturation(0.3).hex,
//     '#89d185': context.green.hex,
//     '#7abd7a': context.green.mix(context.turqoise, 0.3).hex,
//     '#81b88b': context.green.mix(context.turqoise, 0.4).hex,
//     '#8fbcbb': context.turquoise.hex,
//     '#88c0d0': context.turquoise.lighten(0.2).hex,
//     '#264f78': context.blue.mix(context.turqoise).darken(0.4).hex,
//     '#0c7d9d': context.blue.mix(context.turqoise).darken(0.2).hex,
//     '#3399cc': context.blue.hex,
//     '#75beff': context.blue.lighten(0.4).hex,
//     '#157efb': context.blue.hex,
//     '#b180d7': context.purple.hex,
//     '#b48ead': context.purple.setLuminance(0.9).hex,
//   }

//   for (const [ search, replace ] of Object.entries(replacements)) {
//     const regex = new RegExp(search, 'ig')
//     content = content.replace(regex, replace)
//   }

//   return content
// }
