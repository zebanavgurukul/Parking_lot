const knex = require("../knexFile");

let data_post = (post_data) => {
    return knex('parking_car').insert(post_data)
};

module.exports = {data_post}
