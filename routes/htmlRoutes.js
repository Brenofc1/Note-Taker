// DEPENDENCIES

const path = require('path');
const app = require('express').Router();

// ROUTING

    // HTML GET Requests section: handles when users gi to the page. In each of the below cases the user can see the HTML page of content


    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    })
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    module.exports = app;