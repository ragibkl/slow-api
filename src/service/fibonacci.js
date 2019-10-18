const _ = require('lodash')

function fibonacci(n) {
  const number = _.toInteger(n)

  if (number === 0) return 0;
  if (number === 1) return 1;
  return fibonacci(number - 1) + fibonacci(number - 2);
}


function fibonacciService(req, res) {
  const n = req.params.n || '0'
  if (!_.isInteger(n)) throw new Error('invalid input')

  const number = _.toNumber(n)
  if (number < 0) throw new Error('invalid input')
  const fibN = fibonacci(number)
  res.send({ n, number, fibN })
}

module.exports = {
  fibonacciService
}
