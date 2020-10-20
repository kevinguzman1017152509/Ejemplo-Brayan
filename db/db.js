const mysql =require('mysql');
const mysqlConnection= mysql.createConnection({
host:'181.133.136.83',
user:'mediatecnica',
password:'123',
database:'lab_mediatecnica',
multipleStatements:true
});

mysqlConnection.connect(function(err){
if(err){
    console.error(err);
    return;
}else{

    console.log('base de datos conectada');
}

})
module.exports = mysqlConnection;