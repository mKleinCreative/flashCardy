'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

const CardSchema = new Schema({
  topic: String,
  question: String,
  answer: String
})

module.exports = mongoose.model('Card', CardSchema)
