const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
require('dotenv').config();

//Conectar a la BD e importacion de Modelos
require('./models/Usuarios');
require('./models/Areas_impacto');
require('./models/Contenedores');
require('./models/Requerimientos_seguridad');
require('./models/Activos_criticos');
require('./models/Criterios');
require('./models/Areas_preocupacion');
require('./models/Controles');
require('./models/Consecuencias');
require('./models/Gravedades');
const db = require('./config/db');
db.sync()
    .then(()=>console.log('📩 📩'))
    .catch(err => console.log(err));

//  Habilitar bodyparser para leer datos del formulario
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',routes());

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port,host,()=>{
    console.log('🚀');
});