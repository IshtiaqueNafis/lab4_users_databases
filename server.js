const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDb = require("./config/db");

dotenv.config({path: './config/config.env'});
connectDb()

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Sever is running in ${process.env.NODE_ENV} mode on port ${PORT}`));

process.on('unhandledRejection', (error, promise) => {
    console.log(`ERROR:${error.message}`)
    server.close(() => process.exit(1));

})