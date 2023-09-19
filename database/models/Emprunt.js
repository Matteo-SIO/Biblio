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