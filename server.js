const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())

const car = require('./route/car')
app.use('/car',car)

const bike = require('./route/bike')
app.use('/bike',bike)

const bus = require('./route/bus')
app.use('/bus',bus)

app.listen(4000, () => {
    console.log("server is listening 4000.........")
});