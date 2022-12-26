const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('home')
})

const port = 3000;

app.listen(port, () => {
  console.log('Server is running on port 8000')
})