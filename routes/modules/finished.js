const express = require('express')
const router = express.Router()
const URLto5DigitalWord = require('../../buffer')

router.get('/', (req, res) => {
  const input = req.query.input_URL
  const DigitalWord = URLto5DigitalWord(input)
  res.send(DigitalWord)
})

module.exports = router
