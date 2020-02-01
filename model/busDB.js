const knex = require("../knexFile");

let data_post = (post_data) => {
    return knex('parking_Bus').insert(post_data)
};

// 2
let free_spot = (Bus_number) => {
    return knex.select("Bus_number","Bus_park_number","address","Bus_id").from('parking_Bus').havingIn('parking_Bus.Bus_number',Bus_number)
};

module.exports = {data_post,free_spot}
