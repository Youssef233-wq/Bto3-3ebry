const fs = require('fs');
const express = require('express');
const db = require('./db.json');
const app = express();
const PORT = 3000 | process.env.PORT;
app.get('/',(req,res)=>{
	res.sendFile(__dirname + '/Home.html');
})
app.get('/test',(req,res)=>{
res.end(db.json);
})
app.listen(PORT);
