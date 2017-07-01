const express = require('express')
const app = express()

app.use(express.static('public'));




app.get('/', function (req,res) 
{
  console.log(__dirname)
  res.sendFile(__dirname+'/public/day5.html');
})








app.get('/nSubmit',function(req,res){
	var n=req.query.num;
	
	if(n%2==0){
		res.send(n+" is even");
	}
    else{
    	res.send(n+" is odd");
    }

})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})