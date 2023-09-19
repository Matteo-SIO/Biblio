const {Sequelize} = require("sequelize");
let entity;

module.exports.init = (instance) => {
    entity = instance.define('people', {
        firstname: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        lastname: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        }
    });
    return entity;
};

module.exports.getInstance = () => {
    return entity;
}

// Manage:

// Create
module.exports.createPeople = async (values) => {
    return entity.create(values);
}

// Get
module.exports.getOnePeople = async (query) => {
    return await entity.findOne({where: query});
}

module.exports.getAllPeoples = async (query, options = {}) => {
    return await entity.findAll({where: query, ...options});
}

// Update
module.exports.updatePeople = async (query, values) => {
    await entity.update(values, {where: query});
}

// Delete
module.exports.deletePeople = async (query) => {
    await entity.destroy({where: query});
}

// exist
module.exports.existPeople = async (query) => {
    return await entity.count({where: query});
}