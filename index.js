const express = require('express');
const app = express();
const PORT =3000;
app.get('/', (req,res)=>{
res.end('test');
})
app.listen(PORT);
