const Buffer = require('node:buffer').Buffer

function URLto5DigitalWord (url) {
  const DigitalWord = Buffer.from(url)
    .toString('base64')
    .slice(0, 5)
  return DigitalWord
}

module.exports = URLto5DigitalWord

// URLto5DigitalWord('https://nodejs.org/api/buffer.html#buffer')
// console.log(Buffer.from('Hello World').toString('base64'))
// console.log(Buffer.from('SGVsbG8gV29ybGQ=', 'base64').toString('ascii'))
