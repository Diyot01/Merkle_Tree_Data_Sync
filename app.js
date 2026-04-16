const express = require('express');

const app = express();

const userRoutes = require('./routes/userRoutes.js');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use('/api', userRoutes);    

app.get('/', (req, res) => {
    res.send("Hello");
});

module.exports = app;