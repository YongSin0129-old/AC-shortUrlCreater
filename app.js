const express = require('express')
const hbs = require('express-handlebars').engine

const app = express()
const port = 3000

app.engine('hbs', hbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.set('views', './views')

// middleware
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})
