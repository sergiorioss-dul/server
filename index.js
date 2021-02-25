const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());

require('dotenv').config();

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
    .then(() => console.log('📩 📩'))
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.use('/',routes());

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

app.listen(PORT, HOST, () => {
    console.log(`Server is running on ${HOST}:${PORT} 🚀`);
});
