const express = require('express')
const app = express()
const db = require('./db')
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Welcome to my hotel... how can i help you broo ji')
})

const personRoutes = require('./routes/personRoutes')
const menuItemRoutes = require('./routes/menuItemRoutes')
app.use('/menu', menuItemRoutes)
app.use('/person', personRoutes)

app.listen(3000, () => {
  console.log("listening on port 3000")
})