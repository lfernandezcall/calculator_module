var moment = require('moment')
console.log("Now: " + moment().format('LLLL'))

var sumFunc = require('./operations/sum.js').sum
sumFunc()

var subFunc = require('./operations/substraction.js').sub
subFunc()

var mulFunc = require('./operations/multiplication.js').mul		
mulFunc()

var divFunc = require('./operations/division.js')
divFunc(7, 6)

