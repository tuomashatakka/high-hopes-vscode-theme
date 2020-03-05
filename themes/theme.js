const { resolve }             = require('path')
const { readFileSync: read }  = require('fs')


module.exports = function populateTheme (colors) {
  return {
    $schema:  "vscode://schemas/color-theme",
    type:     "dark",
    colors:   {
      "editor.background":            `${colors.background}`,
      "editor.foreground":            `${colors.foreground}`,
      "menu.background":	            `${colors.background}`,
      "sideBarTitle.foreground":      `${colors.foreground}`,
      "activityBarBadge.background":  `${colors.background}`,
    }
	}
}
