import express = require(‘express’)
import path = require(‘path’)
import bodyParser = require(‘body-parser’)
import fs = require(‘fs’)
const app = express()

app.use(express.static(‘public’))
app.use(bodyParser.urlencoded({ extended: true }))
app.post(‘/save’, (request, response) => {
  const content = JSON.stringify(request.body)
  const fileNamePath = path.join(__dirname, ‘data’, new Date().toISOString())
  fs.writeFile(fileNamePath + ‘async.json’, content, function () {
    console.log(new Date() + ‘async’)
  })
  fs.writeFileSync(fileNamePath + ‘sync.json’, content)
  response.json({ file_path: fileNamePath })
})
// app.get(‘/styles.css’, (request, response) => {
//   response.sendFile(path.join(__dirname, ‘styles.css’))
// })
// app.get(‘/img/legoland-express.jpg’, (request, response) => {
//   response.sendFile(path.join(__dirname, ‘img/legoland-express.jpg’))
// })
// app.get(‘/’, (request, response) => {
//   response.sendFile(path.join(__dirname, ‘index.html’))
// })
app.listen(8083, () => console.log(‘App listening on http://localhost:8083’))