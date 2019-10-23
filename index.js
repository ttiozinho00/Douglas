const express = require('express')
const PORT = 3000
const nunjucs = require('nunjucks')
//teste
const app = express()

nunjucs.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extend: false }))
app.set('view engine', 'njk')

var age

app.get('/', (req, res) => {
  // req e res são middleware
  return res.render('age')
})

app.get('/age', (req, res) => {
  return res.render('age')
})

app.get('/minor', (req, res) => {
  return res.render('minor', { age })
})

app.get('/major', (req, res) => {
  return res.render('major', { age })
})

app.post('/create', (req, res) => {
  age = req.body.age
  if (age >= 18) {
    return res.redirect('/major')
  }
  return res.redirect('/minor')
})

app.listen(process.env.PORT || PORT)
console.log('Server running in PORT', PORT)
