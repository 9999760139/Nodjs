const express = require('express');


const app = express();

app.get('/',function(req,res){
    res.send('this si get res ')
})

app.get('/nitin',function(req,res){
    res.send('this is from app.get and /nitin');
})

app.get('/nitin/:id',function(req,res){
    const id = req.params.id
    res.send('this id is dynamic route'+ id)
})

app.listen(9000,function(req,res){
    console.log('running...')
});