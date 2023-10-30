import React from 'react'

function instafollowers() {
const express = require('express'); 
const followers = require('instagram-followers'); 
const app = express(); 
	
app.get('/' , (req , res)=>{ 
	res.send("GeeksforGeeks"); 
}); 
	
app.get('/:username' , (req , res) => { 
	followers(req.params.username).then((count) => { 
		if(!count){ 
			res.send("Account Not Found"); 
			return; 
		} 
		res.send("Username " + req.params.username + 
			" have " + "<b>" + count + "</b>" + " followers"); 

	}); 
}); 

// Server setup 
app.listen(4000 , ()=>{ 
	console.log("server is running on port 4000"); 
});

  return (
    <div>res.send("Username " + req.params.username + 
    " have " + "<b>" + count + "</b>" + " followers"); </div>
  )
}

export default instafollowers