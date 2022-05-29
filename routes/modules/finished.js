const express = require('express')
const router = express.Router()
const URLto5DigitalWord = require('../../buffer')
const url = require('../../models/url')

router.get('/', (req, res) => {
  const input = req.query.input_URL
  const DigitalWord = URLto5DigitalWord(input)
  url.create({ id: DigitalWord, url: input })
  res.send(DigitalWord)
})

module.exports = router
