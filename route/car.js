const express = require("express");
const car = express.Router();
const carDB = require("../model/carDB")

car.post('/car_post', (req,res) => {
    let post_data = {
        address : req.body.address,
        car_park_number : req.body.car_park_number,
        car_number : req.body.car_number
    }
    carDB.data_post(post_data)
    .then(()=>{
        res.send('insert')
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = car