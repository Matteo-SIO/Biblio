const bdd = require('./database/bdd');
const server = require('./server');
const debug_db = require('./debug_db');

// Connect to DB
bdd.connect({
    host: 'localhost',
    port: 3307,
    user: 'root',
    pass: '',
    dnName: 'biblio'
}).then(async () => {
    // One DB connection is established...

    // Do debug tasks to DB (like insert test data)
    await debug_db.doDebug();

    // Run the REST API server at port 3000
    server.init(3000);

});

