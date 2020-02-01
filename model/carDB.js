const knex = require("../knexFile");

// 1
let data_post = (post_data) => {
    return knex('parking_car').insert(post_data)
};

// 2
let free_spot = (car_number) => {
    return knex.select("car_number","car_park_number","address","car_id").from('parking_car').havingIn('parking_car.car_number',car_number)
};

module.exports = {data_post,free_spot}
