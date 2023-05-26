const fs = require('fs'):
const express = require('express');
const db = require('./db.json');
const app = express();
const PORT = 3000 | process.env.PORT;
app.get('/',(req,res)=>{
	res.end('test');
})
app.get('https://bto3-3ebry.vercel.app/test',(req,res)=>{
res.end(db.json);
})
app.listen(PORT);
