const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const input = req.query.input_URL
  res.send(input)
})

module.exports = router
