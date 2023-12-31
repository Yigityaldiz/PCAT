const express = require('express');
const path = require('path');
const app = express();

const myLogger = (req,res,next) => {
    console.log("Middleware log1");
    next();
}

const myLogger2 = (req ,res , next) =>{
    console.log("Middleware log2");
    next();
}

//MiddleWare 
app.use(express.static('public'));
app.use(myLogger); // middleware i cagirmak gerekiyor.
app.use(myLogger2);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'temp/index.html'));
})

const port = 3000;

app.listen(port, () => {
    console.log(`Port ${port} de sunucu baslatildi .. `);
})