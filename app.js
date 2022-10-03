//create server using express

const express = require('express'); // use express module
const { result } = require('lodash');

const path = require('path') // use built-in path module to get file
const db= require('./js/mysql');
const app = express(); //create app object as server
// const db = require('./js/mysql'); // return an connection object
// db.connection.query("SELECT * FROM ncc", (err,result,fields)=>{ //connection obj has query method
//     if(err) throw err;
//     console.log(result);
// })
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.post('/',(req,res) =>{
    const infor = req.body;
    if (infor){
        db.insertQuery(infor);
        return res.status(200).redirect('/');
    }
    return res.status(200).redirect('/');
});
app.get('/',function(req,res){
    return res.sendFile(path.resolve(__dirname,'./public/index.html'));//we can put html and other files(css,js,image) in 1 dir 
    // then put the other files in public
});

app.all('*',function(req,res){ //handle false
    return res.status(404).send('404 not found');
});

app.listen(5000,function(){ //localhost:5000
    console.log("server is running"); 
});