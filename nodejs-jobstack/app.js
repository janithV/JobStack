const express = require('express');
const bodyParser = require('body-parser');
const con = require('./config/db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

con.connect((err) => {
    if(err) throw err;
    console.log("Database connected");
})

module.exports = app;

