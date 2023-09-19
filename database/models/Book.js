const {Sequelize} = require("sequelize");
let entity;

module.exports.init = (instance) => {
    entity = instance.define('book', {
        title: {
            type: Sequelize.STRING,
            required: true,
            notNull: true,
            unique: true
        },
        author: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        published_date: {
            type: Sequelize.DATE,
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
module.exports.createBook = async (values) => {
    return entity.create(values);
}

// Get
module.exports.getOneBook = async (query) => {
    return await entity.findOne({where: query});
}

module.exports.getAllBooks = async (query, options = {}) => {
    return await entity.findAll({where: query, ...options});
}

// Delete
module.exports.deleteBook = async (query) => {
    await entity.destroy({where: query});
}

// update
module.exports.updateBook = async (query, values) => {
    await entity.update(values, {where: query});
}

// exist
module.exports.existBook = async (query) => {
    return await entity.count({where: query});
}