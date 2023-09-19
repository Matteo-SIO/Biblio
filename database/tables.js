module.exports.initTables = (bdd) => {
    // Registers tables:
    const Book = require('./models/Book').init(bdd);
    const Person = require('./models/People').init(bdd);
    const Emprunt = require('./models/Emprunt').init(bdd);

    // Create relations for "Emprunt" table
    // References to "People" and "Book" tables
    Emprunt.belongsTo(Person, {foreignKey: 'people_id'});
    Emprunt.belongsTo(Book, {foreignKey: 'book_id'});

    // Sync the structure to DB
    return bdd.sync({force: false});
}


