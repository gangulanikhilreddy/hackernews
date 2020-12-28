const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./Routes');
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 2000;

app.use('/', routes);

mongoose.connect('mongodb://localhost:27017/hackernews', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database');
        app.listen(PORT, () => {
            console.log(`Server running at port ${PORT}`);
        })
    }).catch(e => {
        console.log(e);
    })