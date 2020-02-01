const express = require("express");
const bus = express.Router();
const busDB = require("../model/busDB")

bus.post('/bus_post', (req,res) => {
    let post_data = {
        address : req.body.address,
        Bus_park_number : req.body.Bus_park_number,
        Bus_number : req.body.Bus_number
    }
    busDB.data_post(post_data)
    .then(()=>{
        res.send('insert')
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = bus