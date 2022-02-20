const mongoose = require('mongoose'); // mongoose being exported here

const connectDB = async () => {
    const conn = await mongoose.connect('mongodb+srv://nafis:nafis123@cluster0.jklsh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log(`Mongo Db connected`);
}
module.exports = connectDB;