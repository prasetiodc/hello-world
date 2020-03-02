require('dotenv').config()

const express = require('express')
const cors = require('cors')
const portServer = process.env.PORT_SERVER

let app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', (req, res) => {
  res.send('Welcome to Megafit Server')
})

app.listen(portServer, () => {
  console.log(`Server lister on ${portServer}`)
})

module.exports = app
