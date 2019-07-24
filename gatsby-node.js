const fs = require('fs-extra')
const path = require("path")

exports.onPostBuild = () =>{
    console.log('Copying Locales')
    fs.copySync(__dirname,'/src/locales')
    fs.copySync(__dirname,'/public/locales')
}