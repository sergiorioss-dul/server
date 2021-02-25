const Usuarios = require('../models/Usuarios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async(req,res,next) =>{
    const {usuario,password } = req.body;
    const user = Usuarios.findOne({ usuario }); // Busca en la bd si hay un usuario igual al que venga del request
    if(!user){
        await res.status(401).json({ msj: 'Ese usuario no existe'}); //Error 401 -> no autorizado
        next();
    }else{
        if(!bcrypt.compareSync(password,user.password)){ //Si el password es incorrecto
            await res.status(401).json({msj:'Password Incorrecto'});
            next();
        }else{
            const token = jwt.sign({
                usuario : user.usuario,
                password : user.password,
                id: user.id
            },
            'UNAM2019',
            {
                expiresIn: '2h'
            });
            res.json({token});
        }
    }
}

exports.userLogin = (req,res) =>{
    res.status(200).send('Ramero');
}