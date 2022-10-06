//create server using express

const express = require('express'); // use express module
const { result } = require('lodash');
const port = 5000;
const path = require('path') // use built-in path module to get file
const db= require('./js/mysql');
const app = express(); //create app object as server

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.post('/api/message',(req,res) =>{
    const infor = req.body;
    if (!infor.name||!infor.email||!infor.message){
        return res.status(401).json({succes:false,msg:"Please provide information"});
    }
    db.insertQuery(infor);
    return res.status(201).json({success:true,name:infor.name});
});
app.get('/',function(req,res){
    return res.sendFile(path.resolve(__dirname,'./public/index.html'));//we can put html and other files(css,js,image) in 1 dir 
    // then put the other files in public
});

app.all('*',function(req,res){ //handle false
    return res.status(404).send('404 not found');
});

app.listen(port,function(){ //localhost:5000
    console.log("server is running"); 
});