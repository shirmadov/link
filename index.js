const express = require('express');
const app = express();
const port = 8080;
const path = require('path');


app.use(express.json());

app.use('/static', express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/game.html'));
});

app.get('/widget/:chatId',(req,res)=>{
    var chatId = req.params.chatId;
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.all('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/404.html'));
});

app.listen(port,()=>{
    console.log('Connected')
})