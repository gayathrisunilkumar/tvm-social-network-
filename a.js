

const express = require('express')
const app = express()

app.use(express.static('public'));

app.get('/about',function(req,res)
{
console.log(__dirname)
res.sendFile(__dirname+'/public/portfolio.html');


})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})