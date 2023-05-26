const fs = require('fs'):
const express = require('express');
const app = express();
const PORT = 3000 | process.env.PORT;
app.get('/',(req,res)=>{
	res.sendFile(__dirname + '/index.html');
})
app.get('/sign-in,(req,res)=>{
	res.sendFile(__dirname + '/sign-in.html');
})
app.listen(PORT);
