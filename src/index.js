const express = require('express')
const fibonacci = require('./service/fibonacci')

const app = express()
const port = 80

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/fibonacci', (req, res) => {
  const { n } = req.params
  const fibN = fibonacci(n)
  res.send(n)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
