const express = require('express')
const app = express()
const SiblingsRoutes = require('./siblings')
const LogsRoutes = require('./logs')

app.use('/siblings', SiblingsRoutes)
app.use('/logs', LogsRoutes)

module.exports = app