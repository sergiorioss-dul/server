const Usuarios = require('../models/Usuarios');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async(req, res) => {
    const { usuario, password } = req.body;
    const user = await Usuarios.findOne({ where: { usuario } });

    if(!user) {
        res.status(401).json({ error: 'Nombre de usuario o contraseña incorrecto.' });
    } else {
        if(password !== user.password) {
            res.status(401).json({ error: 'Nombre de usuario o contraseña incorrecto.' });
        } else {
            const token = jwt.sign({ id: user.id }, 'UNAM2019', { expiresIn: '24h' });
            res.status(200).json({ token, user });
        }
    }
};

exports.userLogin = (req, res) =>{
    res.status(200).send('Home');
}
