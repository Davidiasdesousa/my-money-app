const port = 3009

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryparser = require('express-query-int')
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryparser())

server.listen(port, function () {
    console.log(`Running on port ${port}.`);
})

module.exports = server