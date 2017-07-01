const express = require('express')
const app = express()




app.get('/:name',function(req,res)
{
    if(req.params.name%2==0)
    {
	res.send(req.params.name+' is even') }
	else
	{
		res.send(req.params.name+' is odd') 
	}
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
