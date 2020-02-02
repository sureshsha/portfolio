const path = require('path')
const express = require('express')
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public' )

app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs');
 
app.get('/', function (req, res) {
  res.render('index')
})

app.get('/formData', (req, res) => {
  res.send('data received successfully')
  console.log(req.query.formData)
})
 
app.listen(process.env.PORT || 3000, ()=> {
    console.log("server running")
});