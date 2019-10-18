const express = require('express')
const { fibonacciService } = require('./service/fibonacci')

const app = express()
const port = 80

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/fibonacci/:n', fibonacciService)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
