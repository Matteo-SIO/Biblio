const Emprunt = require('../database/models/Emprunt');

// Register the /api/emprunt route
module.exports.init = (app, BASE_URL) => {

    // Get emprunt by id, reply DB response
    app.get(BASE_URL + '/:empruntId', async (request, reply) => {
        let empruntId = request.params.empruntId;
        let emprunt = await Emprunt.getOneEmprunt({id: empruntId});
        reply.send(emprunt);
    });

    // Get all emprunts, reply DB response
    // optional query: offset, limit
    app.get(BASE_URL + '/', async (request, reply) => {
        let emprunts = await Emprunt.getAllEmprunts({}, {
            offset: request.query.offset ?? 0,
            limit: request.query.limit ?? 20
        });
        reply.send(emprunts);
    })

    // Get all emprunts from people id, reply DB response
    // optional query: offset, limit
    app.get(BASE_URL + '/people/:peopleId', async (request, reply) => {
        let emprunts = await Emprunt.getAllEmprunts({people_id: request.params.peopleId}, {
            offset: request.query.offset ?? 0,
            limit: request.query.limit ?? 20
        });
        reply.send(emprunts);
    });

    // Get all emprunts from book id, reply DB response
    // optional query: offset, limit
    app.get(BASE_URL + '/book/:bookId', async (request, reply) => {
        let emprunts = await Emprunt.getAllEmprunts({book_id: request.params.bookId}, {
            offset: request.query.offset ?? 0,
            limit: request.query.limit ?? 20
        });
        reply.send(emprunts);
    });

    // Create a emprunt, reply DB response
    app.post(BASE_URL + '/', async (request, reply) => {
        let emprunt = await Emprunt.createEmprunt(request.body);
        reply.send(emprunt);
    });

    // No update emprunt

    // Delete a emprunt by id, reply DB response
    app.delete("/api/emprunt/:empruntId", async (request, reply) => {
        await Emprunt.deleteEmprunt({id: request.params.empruntId});
        reply.send("OK");
    });

}