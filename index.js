const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).send(`Hello World! the is my first api with port: ${port}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})