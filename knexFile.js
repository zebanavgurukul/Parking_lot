const knex = require ("knex");

const connection = {
    client : "mysql",
    connection : {
        host : "localhost",
        user : "root",
        password : "navgurukul",
        database : "parking_lot"
    }
};

module.exports = knex(connection);