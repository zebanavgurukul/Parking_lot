const knex = require("../knexFile");

let data_post = (post_data) => {
    return knex('parking_Bike').insert(post_data)
};

module.exports = {data_post}
