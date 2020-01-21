const path = require('path')
const fs = require('fs')

module.exports = {
  readFile (path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          reject()
        }
        resolve(JSON.parse(data))
      })
    })
    
  }
}