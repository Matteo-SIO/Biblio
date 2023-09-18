const bdd = require('./database/bdd');

bdd.init({
    host: 'localhost',
    port: 3307,
    user: 'root',
    pass: '',
    dnName: 'biblio'
}).then(async () => {
    const Book = require('./database/models/Book');
    const People = require('./database/models/People');
    const Emprunt = require('./database/models/Emprunt');

    console.log('BDD connectée');

    if (!await Book.existBook({title: 'Le livre de rien du tout'})) {
        console.log('Debug: create book')
        await Book.createBook({
            title: 'Le livre de rien du tout',
            author: 'Rudyard Kipling',
            published_date: '2019-01-01'
        });
    }

    if (!await People.existPeople({lastname: 'Jean', firstname: 'Vier'})) {
        console.log('Debug: create people')
        await People.createPeople({
            lastname: 'Jean',
            firstname: 'Vier',
        });
    }


    let book = await Book.getOneBook({
        title: 'Le livre de rien du tout'
    });

    let people = await People.getOnePeople({
        lastname: 'Jean',
        firstname: 'Vier',
    });


    await Emprunt.createEmprunt({
        people_id: people.id,
        book_id: book.id,
    })






});

