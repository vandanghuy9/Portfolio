const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'15112002',
    database: 'familyname'
});


function insertQuery(infor){
    var sql = "INSERT INTO contact VALUES (\' NAME\',\'EMAIL\',\'MESSAGE\')";
    sql = sql.replace("NAME",infor.name);
    sql = sql.replace("EMAIL",infor.email);
    sql = sql.replace("MESSAGE",infor.message);
    
    connection.query(sql,(err,result)=>{
        if (err) throw err;
        else console.log("1 record inserted");
    });
}
module.exports.insertQuery= insertQuery;


