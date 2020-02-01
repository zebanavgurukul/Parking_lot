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

// 2
bus.post("/spot",(req,res)=>{
    let Bus_number = req.body.Bus_number;
    busDB.free_spot(Bus_number)
    .then((data)=>{
        if(data.length == 0){
            res.send("You can't park here")
        }
        else if(data[0]["Bus_number"] == Bus_number){
            res.send("you can park here")
        }
        else{ 
            res.send("You can't park here.....")
        }
    }).catch((err)=>{
        res.send(err)
    })
});

module.exports = bus