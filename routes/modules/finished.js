const express = require('express')
const router = express.Router()
const URLto5DigitalWord = require('../../buffer')
const url = require('../../models/url')

router.get('/', (req, res) => {
  const input = req.query.input_URL
  const DigitalWord = URLto5DigitalWord(input)
  const shortURL = `http://localhost:3000/URLtransfer/${DigitalWord}`
  url.findOne({ id: DigitalWord }).then(data => {
    if (!data) {
      url.create({ id: DigitalWord, url: input })
      console.log(`created a new shortURL : ${shortURL}`)
    }
  })
  res.render('finished', { shortURL })
})

module.exports = router
