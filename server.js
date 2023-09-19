const fastify = require('fastify');

module.exports.init = (port) => {
    let app = fastify({
        logger: true,
        ignoreTrailingSlash: true
    });

    // Register routes here
    require('./routes/BooksRoute').init(app, '/api/books');
    require('./routes/PeopleRoute').init(app, '/api/people');
    require('./routes/EmpruntRoute').init(app, '/api/emprunt');

    // Start API server
    app.listen({ port }, function (err, address) {
        if (err) {
            app.log.error(err);
            process.exit(1);
        }

        app.log.info(`Fastify is listening on port: ${address}`);
    });

}
