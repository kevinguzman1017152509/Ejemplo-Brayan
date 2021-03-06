const express =require('express'); //tabNine
const router = express.Router();
const mysqlConnection= require('../db/db');


//contenido y configuraciones 
router.get('/',(req,res)=>{
mysqlConnection.query('SELECT * FROM modulos',(err,rows,fields)=>{

    if(!err){
   //verdadero
    res.json(rows); // traer las filas con los datos
    }else{ //sino
    // entonces hay un error
    console.log(err);
    }// fin si
}); // fin conexion 
});// fin mostrar los datos de la tabla modulos
router.get('/modulo/:id',(req,res)=>{
const {id} = req.params;
mysqlConnection.query('SELECT * FROM modulos WHERE id =?,[id]',
(err,rows,fields)=>{

if(!err){
res.json(rows[0]); // traiga los otros campos
}else{
console.log(err);    
}    
})// fin conexion 

});

module.exports=router;