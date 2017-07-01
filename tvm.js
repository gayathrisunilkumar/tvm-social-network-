const express = require('express')
const app = express()


/* for db */
var Datastore=require('nedb')
var db=new Datastore({filename:'store1.db',autoload:true});

app.set('port',process.env.PORT||5000)

app.set('view engine','ejs');




app.use(express.static('public'));

app.get('/login',function(req,res)
{
console.log(__dirname)
res.sendFile(__dirname+'/public/login.html');

})

app.get('/', function (req,res) 
{
  console.log(__dirname)
  res.sendFile(__dirname+'/public/b.html');
})

app.get('/signup', function (req,res) 
{
  console.log(__dirname)
  res.sendFile(__dirname+'/public/register.html');
})







app.get('/loginSubmit',function(req,res){
var emai=req.query.Email;
	var pass=req.query.Password;
	

          var person={
         "email":emai,
	     "password":pass
                     }
 db.find(person,function(err,result){
 //	console.log(result);
 





	if(result.length>0){
	db.find({},function(err,result){
    
	res.render('home',{res:result})
})
}
else{
	res.send('failed');
}

//	if(result.length>0){

/*    res.send("login successful");
	}

	else{
  res.send("error logging in");
	}
})  */

})
//lets see from here


  app.get('/profile/:name',function(req,res){

	var a=req.params.name;
db.find({user_name:a},function(err,result){

	console.log(result);
if(result.length!=0){
	res.render('profile',{res:result})
                    }
else{
	res.send('no user found with'+a)
}
})
})  





//lets see upto this
 





})



/*creating route */




/* insert to database */




/*	if(emai=="gayathris56@gmail.com" && pass=="123"){
		res.send("Login success");
	                                                }
    else{
    	res.send("login failed");
        }   */





app.get('/signupSubmit',function(req,res)
{
	var nam=req.query.name;
	var ema=req.query.email;
	var user=req.query.username;
	var pas=req.query.password;
          var perso={

          "name":nam,
	     "email":ema,
	     "username":user,
	     "password":pas
                     }
/* insert to database */
db.insert(perso,function(err,result){

	// console.log(result);
	res.send("success inserted");
                                    })





	

}) 


/* app.get('/test',function(req,res){
	res.render('index',{text:"Welcome to my page gayathri"});
})




app.get('/home',function(req,res){
    db.find({},function(err,result){
    	
    
	res.render('index2',{res:result})
})

})  */






app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!')
})