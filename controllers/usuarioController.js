const Usuarios = require('../models/Usuarios');

exports.crearCuenta = async(req,res,next) =>{
    const { usuario,nombre,password } = req.body;
    try {
        await Usuarios.create({
            usuario,
            nombre,
            password,
        });
        res.status(200).json({msj:'Exito'});
    } catch (error) {
        res.status(404).json({error:'Error'});
        next();
    }
}

exports.eliminarCuenta = async(req,res) =>{
    const { id } = req.params;
    const resultado = await Usuarios.destroy({
        where: {
            id
        }
    })
    if(!resultado) return next();
    res.status(200).json({msj:'Eliminado'});
}

exports.verCuentas= async(req,res) =>{
    const usuarios = await Usuarios.findAll();
    res.status(200).json({usuarios});
}

exports.editarCuenta = async(req,res)=>{
    const { id } = req.params;
    const { usuario,nombre,password } = req.body;
    const cuenta = await Usuarios.findOne({
        where : {
            id: id
        }
    });
    cuenta.usuario = usuario;
    cuenta.nombre = nombre;
    cuenta.password = password;
    await cuenta.save();
    res.status(200).json({msj:'Editado'});
}