const express= require('express');
const app = express();
const routes= require('./routes/routes');
//ajustes
app.set('port',3000)


// Middleware
app.use(express.json());


// ajustess
app.use('/api',routes);
app.listen(app.get('port'),()=>{
    console.log(`Servidor corriendo en puerto  ${app.get('port')}`)
}) 
