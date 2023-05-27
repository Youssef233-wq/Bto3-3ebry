const fs = require('fs');
const express = require('express');
const db = require('./db.json');
const app = express();
const PORT = 3000 | process.env.PORT;
app.use(express.static);
app.get('/',(req,res)=>{
	res.sendFile(__dirname + '/index.html');
})
app.get('/test',(req,res)=>{
res.sendFile(__dirname + "/test.json");
	res.end('test');
})
app.listen(PORT);
