require('dotenv').config();
const express = require("express");

const cors = require('cors') 
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/userRoutes');

const corsOptions = {origin: process.env.FRONTEND_URL, credentials: true}

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());


app.listen(process.env.PORT,()=>{
    console.log("server running on port 5000")
})

try{
    const connect = async() =>{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("db connected successfully")   
    }
    connect();
}
catch(err){
    console.log(err.message)
}

app.get('/',(req, res)=>{
    res.status(200).json("hello world")
})

app.use('/user',userRoutes)