const Sequelize = require('sequelize');
const tables = require('./tables')
let instance;

module.exports.connect = ({host, port, user, pass, dnName}) => {
    return new Promise((resolve) => {
        // Connect to DB with Sequelize ORM
        instance = new Sequelize({
            host,
            port,
            dialect: 'mysql',
            username: user,
            password: pass,
            database: dnName
        });

        // Call tables.initTables() to register tables and relations
        tables.initTables(instance).then(() => {
            resolve();
        })
    })
};

// Get the instance of Sequelize ORM
module.exports.getInstance = () => {
    return instance;
}