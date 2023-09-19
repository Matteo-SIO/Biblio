const People = require('../database/models/People');

// Register the /api/people route
module.exports.init = (app, BASE_URL) => {

    // Get people by id, reply DB response
    app.get(BASE_URL + '/:peopleId', async (request, reply) => {
        let peopleId = request.params.peopleId;
        let people = await People.getOnePeople({id: peopleId});
        reply.send(people);
    });

    // Get people by firstname and lastname, reply DB response
    app.get(BASE_URL + '/:firstname/:lastname', async (request, reply) => {
        let firstname = request.params.firstname;
        let lastname = request.params.lastname;
        let people = await People.getOnePeople({firstname: firstname, lastname: lastname});
        reply.send(people);
    });

    // Get all peoples, reply DB response
    // optional query: offset, limit
    app.get(BASE_URL + '/', async (request, reply) => {
        let peoples = await People.getAllPeoples({}, {
            offset: request.query.offset ?? 0,
            limit: request.query.limit ?? 20
        });
        reply.send(peoples);
    });

    // Create a people, reply DB response
    app.post(BASE_URL + '/', async (request, reply) => {
        let people = await People.createPeople(request.body);
        reply.send(people);
    });

    // Update a people by id, reply DB response
    app.put(BASE_URL + '/:peopleId', async (request, reply) => {
        await People.updatePeople({id: request.params.peopleId}, request.body);
        reply.send("OK");
    });

}