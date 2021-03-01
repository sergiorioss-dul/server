const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());

require('dotenv').config();

const path = require("path").join(__dirname, "models");

require("fs").readdirSync(path).forEach(function(file) {
    require("./models/" + file);

});

const db = require('./config/db');

db.sync()
    .then(() => console.log('📩 📩'))
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.use('/',routes());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT} 🚀`);
});
