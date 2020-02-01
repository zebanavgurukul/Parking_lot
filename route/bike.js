const express = require("express");
const bike = express.Router();
const bikeDB = require("../model/bikeDB")

// 1
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

// 2
bike.post("/spot",(req,res)=>{
    let Bike_number = req.body.Bike_number;
    bikeDB.free_spot(Bike_number)
    .then((data)=>{
        if(data.length == 0){
            res.send("You can't park here")
        }
        else if(data[0]["Bike_number"] == Bike_number){
            res.send("you can park here")
        }
        else{ 
            res.send("You can't park here.....")
        }
    }).catch((err)=>{
        res.send(err)
    })
});

module.exports = bike