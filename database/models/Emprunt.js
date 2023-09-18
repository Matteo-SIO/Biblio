const {Sequelize} = require("sequelize");
let entity;

module.exports.init = (instance) => {
    entity = instance.define('emprunt', {

    });
    return entity;
};

module.exports.getInstance = () => {
    return entity;
}

// Manage:
module.exports.createEmprunt = (values) => {
    entity.create(values);
}

// Get
module.exports.getAllEmprunts = async (query) => {
    return await entity.findAll({where: query});
}

// Delete
module.exports.deleteEmprunt = async (query) => {
    await entity.destroy({where: query});
}