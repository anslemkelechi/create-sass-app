const fs = require('fs')

const mainDir = `./sass`
const pathArray = [
  ['abstracts', ['_variables.scss', '_mixins.scss', '_functions.scss']],
  [
    'base',
    [
      '_variables.scss',
      '_reset.scss',
      '_typography.scss',
      'animations.scss',
      '_utilities.scss',
    ],
  ],
  ['components', ['_buttons.scss', '_card.scss', '_form.scss']],
  ['layouts', ['_navigation.scss', '_header.scss', '_footer.scss']],
  ['pages', ['_home.scss', '_header.scss', '_footer.scss']],
  ['themes', ['_pink.scss', '_mint.scss']],
  ['vendors', ['_icons.scss']],
]

const createSass = async () => {
  fs.mkdir(mainDir, { recursive: true }, (err) => {
    pathArray.forEach((el) => {
      const folderPath = `${mainDir}/${el[0]}`
      fs.mkdir(folderPath, { recursive: true }, (err) => {
        el[1].forEach((cur) => {
          fs.writeFile(`${folderPath}/${cur}`, 'New File Written', (err) => {
            console.log('Folders & Files Created')
          })
        })
      })
    })
    fs.writeFile(
      `${mainDir}/main.scss`,
      'Import all your sass files here',
      (err) => {
        console.log('No Error, Start Building')
      },
    )
  })
}

module.exports = createSass
