const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost:3306',
    user:'root',
    password:'15112002'
});

connection.connect((err) =>{
    if(err) throw err;
    console.log("connected");
});