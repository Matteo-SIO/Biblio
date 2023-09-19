const Book = require('../database/models/Book');

// Register the /api/books route
module.exports.init = (app, BASE_URL) => {

    // Get book by id, reply DB response
    app.get(BASE_URL + '/:bookId', async (request, reply) => {
        let bookId = request.params.bookId;
        let book = await Book.getOneBook({id: bookId});
        reply.send(book);
    })

    // Get book by title, reply DB response
    app.get(BASE_URL + '/title/:bookTitle', async (request, reply) => {
        let bookTitle = request.params.bookTitle;
        let book = await Book.getOneBook({title: bookTitle});
        reply.send(book);
    })

    // Get all books, reply DB response
    // optional query: offset, limit
    app.get(BASE_URL + '/', async (request, reply) => {
        let books = await Book.getAllBooks({}, {
            offset: request.query.offset ?? 0,
            limit: request.query.limit ?? 20
        });
        reply.send(books);
    })

    // Get all books from author name, reply DB response
    // optional query: offset, limit
    app.get(BASE_URL + '/author/:author', async (request, reply) => {
        let books = await Book.getAllBooks({author: request.params.author}, {
            offset: request.query.offset ?? 0,
            limit: request.query.limit ?? 20
        });
        reply.send(books);
    })

    // Create a book, reply DB response
    app.post(BASE_URL + '', async (request, reply) => {
        let book = await Book.createBook(request.body);
        reply.send(book);
    })

    // Update a book by id, reply DB response
    app.put(BASE_URL + '/:bookId', async (request, reply) => {
        await Book.updateBook({id: request.params.bookId}, request.body);
        reply.send("OK");
    })

    // Delete a book by id, reply DB response
    app.delete(BASE_URL + '/:bookId', async (request, reply) => {
        await Book.deleteBook({id: request.params.bookId});
        reply.send("OK");
    })
}