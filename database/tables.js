module.exports.initTables = (bdd) => {
    // Registers tables:
    const Book = require('./models/Book').init(bdd);
    const Person = require('./models/People').init(bdd);
    const Emprunt = require('./models/Emprunt').init(bdd);

// emprunt relation with person and book
    Emprunt.belongsTo(Person, {foreignKey: 'people_id'});
    Emprunt.belongsTo(Book, {foreignKey: 'book_id'});

// Sync to DB
    return bdd.sync({force: false});
}


