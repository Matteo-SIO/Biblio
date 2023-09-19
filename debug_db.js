module.exports.doDebug = async () => {
    // Get models entities
    const Book = require('./database/models/Book');
    const People = require('./database/models/People');
    const Emprunt = require('./database/models/Emprunt');

    // If book doesn't exist, create it
    if (!await Book.existBook({title: 'Le livre de rien du tout'})) {
        console.log('Debug: create book')
        await Book.createBook({
            title: 'Le livre de rien du tout',
            author: 'Rudyard Kipling',
            published_date: '2019-01-01'
        });
    }

    // If people doesn't exist, create it
    if (!await People.existPeople({lastname: 'Jean', firstname: 'Vier'})) {
        console.log('Debug: create people')
        await People.createPeople({
            lastname: 'Jean',
            firstname: 'Vier',
        });
    }

    // Get book and people from DB
    let book = await Book.getOneBook({
        title: 'Le livre de rien du tout'
    });

    let people = await People.getOnePeople({
        lastname: 'Jean',
        firstname: 'Vier',
    });


    // Create emprunt (can be duplicate)
    await Emprunt.createEmprunt({
        people_id: people.id,
        book_id: book.id,
    })
}