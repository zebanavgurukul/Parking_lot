const express = require("express");
const bike = express.Router();
const bikeDB = require("../model/bikeDB")

bike.post('/bike_post', (req,res) => {
    let post_data = {
        address : req.body.address,
        Bike_park_number : req.body.Bike_park_number,
        Bike_number : req.body.Bike_number
    }
    bikeDB.data_post(post_data)
    .then(()=>{
        res.send('insert')
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = bike