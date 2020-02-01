const knex = require("../knexFile");

// 1
let data_post = (post_data) => {
    return knex('parking_Bike').insert(post_data)
};

// 2
let free_spot = (Bike_number) => {
    return knex.select("Bike_number","Bike_park_number","address","Bike_id").from('parking_Bike').havingIn('parking_Bike.Bike_number',Bike_number)
};

module.exports = {data_post,free_spot}
