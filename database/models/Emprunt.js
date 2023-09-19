let entity;

module.exports.init = (instance) => {
    entity = instance.define('emprunt', {
        // relations are defined in database/tables.js
    });
    return entity;
};

module.exports.getInstance = () => {
    return entity;
}

// Manage:

// Create:
module.exports.createEmprunt = (values) => {
    entity.create(values);
}

// Get
module.exports.getOneEmprunt = async (query) => {
    return await entity.findOne({where: query});
}

module.exports.getAllEmprunts = async (query, options = {}) => {
    return await entity.findAll({where: query, ...options});
}

// Delete
module.exports.deleteEmprunt = async (query) => {
    await entity.destroy({where: query});
}