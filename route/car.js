const express = require("express");
const car = express.Router();
const carDB = require("../model/carDB")

// 1
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

// 2
car.post("/spot",(req,res)=>{
    let car_number = req.body.car_number;
    carDB.free_spot(car_number)
    .then((data)=>{
        if(data.length == 0){
            res.send("You can't park here")
        }
        else if(data[0]["car_number"] == car_number){
            res.send("you can park here")
        }
        else{ 
            res.send("You can't park here.....")
        }
    }).catch((err)=>{
        res.send(err)
    })
});

module.exports = car