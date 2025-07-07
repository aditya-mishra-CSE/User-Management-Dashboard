
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config();


const database = require('./config/database');
database.connect();

const PORT = process.env.PORT || 5000;


const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

//default route

app.get("/", (req, res) => {
    return res.json({
        success:true,
        message:'Your server is up and running....'
    })
});

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`)
})