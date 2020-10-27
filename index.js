const express= require('express');
const app = express();

// definir todos los componentes, modulos app
const routes= require('./routes/routes'); //crud
const modulos = require('./routes/modulos');  //crud
const colegios = require('./routes/colegios');  // crud


//ajustes
app.set('port',3000)



// Middleware
app.use(express.json());


// ajustess
app.use('/api',routes);
app.listen(app.get('port'),()=>{
    console.log(`Servidor corriendo en puerto  ${app.get('port')}`)
}) 
