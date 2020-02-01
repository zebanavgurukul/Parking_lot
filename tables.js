var knex = require("knex")({
    client: 'mysql',
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "navgurukul",
        database: "parking_lot"
    },
    useNullAsDefault: true
});
module.exports = knex;

knex.schema.hasTable('parking_car').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('parking_car', (table) => {
            table.increments('car_id')
            table.string('address')
            table.string('car_park_number')
            table.string('car_number')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
})

knex.schema.hasTable('parking_Bike').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('parking_Bike', (table) => {
            table.increments('Bike_id')
            table.string('address')
            table.string('Bike_park_number')
            table.string('Bike_number')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
})

knex.schema.hasTable('parking_Bus').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('parking_Bus', (table) => {
            table.increments('Bus_id')
            table.string('address')
            table.string('Bus_park_number')
            table.string('Bus_number')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
})