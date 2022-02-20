const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: "./config/config.env"});

const User = require('./models/UserModel');

//read files
const Users = JSON.parse(fs.readFileSync(`${__dirname}/data/user.json`, 'utf-8'));



const importdata = async () => {
    try {
        await User.create(Users);
    }catch (e) {
        console.log(e);
    }
}

if (process.argv[2] === "-i") {
    importdata();
}