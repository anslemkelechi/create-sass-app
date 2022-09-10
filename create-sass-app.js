const fs = require('fs')

const mainDir = `./sass`
const cssDir = `./css`
const pathArray = [
  ['abstracts', ['_variables.scss', '_mixins.scss', '_functions.scss']],
  [
    'base',
    [
      '_variables.scss',
      '_reset.scss',
      '_typography.scss',
      '_animations.scss',
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
  //CREATE SASS FOLDER
  fs.mkdir(mainDir, { recursive: true }, (err) => {
    //LOOP THROUGH THE PATH ARRAY AND CREATE A FOLDER FOR EACH PATH
    pathArray.forEach((el) => {
      const folderPath = `${mainDir}/${el[0]}`
      //LOOP THROUGH THE NEW FOLDER CREATED AND CREATE A THE FILES REPRESENTED FOR THEM
      fs.mkdir(folderPath, { recursive: true }, (err) => {
        el[1].forEach((cur) => {
          fs.writeFile(`${folderPath}/${cur}`, ' ', (err) => {
            console.log('Folders & Files Created')
          })
        })
      })
    })
    //CREATE MAIN SASS FILE
    fs.writeFile(
      `${mainDir}/main.scss`,
      '/*Import all your sass files here*/',
      (err) => {
        console.log('No Error, Start Building')
      },
    )
  })
  //CREATE CSS FOLDER AND MAIN STYLESHEET
  fs.mkdir(cssDir, { recursive: true }, (err) => {
    fs.writeFile(
      `${cssDir}/style.css`,
      '/*Write your css files here*/',
      (err) => {
        console.log('No Error, Start Building')
      },
    )
  })
}

createSass()
