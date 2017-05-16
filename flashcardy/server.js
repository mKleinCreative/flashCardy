'use strict'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('bodyParser')
const Card = require('./model/cards')

const app = express()
const router = express.Router()

const port = process.env.API_PORT || 3000

mongoose.connect('mongodb://jillie:cutie@ds143231.mlab.com:43231/flashcardy')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-type, Access-Control-Request-Method, Access-Control-Request-Headers')

  res.setHeader('Cache-Control', 'no-cache')
  next()
})

router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!' })
})

app.use('/api', router)

app.listen(port, function() {
  console.log( `<3333333 api running on port ${port} <3333333` )
})
