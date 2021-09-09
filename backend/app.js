const express = require("express");
const mongoose = require('mongoose');
const app = express();
require("dotenv/config");

app.use(express.json());


//import routes from routes
const poopsRoute = require('./routes/poops');

//middleware
app.use('/poos', poopsRoute);


//routes
app.get('/', (req,res) => {
    res.send("Welcome to home dir");
});

 

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>
console.log("connected to database")
);


//Listen to port 5000
app.listen(process.env.PORT, () =>
    console.log('listening on port ', process.env.PORT)
);

