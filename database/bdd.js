const Sequelize = require('sequelize');
const tables = require('./tables')
let instance;

module.exports.init = ({host, port, user, pass, dnName}) => {
    return new Promise((resolve) => {
        instance = new Sequelize({
            host,
            port,
            dialect: 'mysql',
            username: user,
            password: pass,
            database: dnName
        });

        tables.initTables(instance).then(() => {
            resolve();
        })
    })
};

module.exports.getInstance = () => {
    return instance;
}