const Model = require('../models/Requerimientos_seguridad');

exports.crear = async(req, res) => {
    try {
        const item = await Model.create(req.body);
        return res.status(200).json({ item });
    } catch (error) {
        return res.status(404).send(error);
    }
};

exports.eliminar = async(req, res) => {
    const { id } = req.params;
    const response = await Model.destroy({ where: { id } });

    if(response) {
        res.status(200).json({ message: 'Eliminado' });
    }
};

exports.getAll = async(req, res) => {
    const { activo_critico_id } = req.params;
    const items = await Model.findAll({ where: { activo_critico_id } });
    res.status(200).json({ items });
};

exports.editar = async(req, res) => {
    const { id } = req.params;
   
    const item = await Model.findOne({ where: { id } });

    Object.keys(req.body).forEach(key => {
        item[key] = req.body[key];
    });
    await item.save();
    res.status(200).json({ item });
};
