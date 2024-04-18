const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const User = require('./models/User.js')
require('dotenv').config()
const app = express();

const bcryptSalt = bcrypt.genSalt(12)

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173'
}));

mongoose.connect('process.env.MONGO_URL')

app.get('/test', (req,res) =>{
    res.json('test ok');
});

app.post('/register', (req,res) =>{
    const {name,email,password} = req.body;
    User.create({
        name,
        email,
        password:bcrypt.hashSync(password, secret),
    })
    res.json({name,email,password});
})

app.listen(4000);