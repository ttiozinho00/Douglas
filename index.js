const express = require('express')
const PORT = 3000
const nunjucs = require('nunjucks')

const app = express()

nunjucs.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extend: false }))
app.set('view engine', 'njk')

const users = ['Diego', 'Robson', 'Chupim']

app.get('/', (req, res) => {
  // req e res são middleware
  return res.render('list', { users })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

app.listen(PORT)
console.log('Server running in PORT', PORT)
