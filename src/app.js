require('dotenv').config('../.env')
const bodyParse = require('body-parser')
const cors = require('cors')
const status = require('http-status')

const express = require('express')
const app = express()
const routesV1 = require('./routes/v1')

app.use(bodyParse.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(status.OK).send({
        title: 'Node Express API',
        version: '0.0.1'
    })
})

app.use('/api/v1/', routesV1)

module.exports = app