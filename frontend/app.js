// express app that serves html files

const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
app.set('view engine', 'ejs');

const URL = process.env.BACKEND_URL || 'http://localhost:8000/api';

app.get('/', async function (req, res) {
    try {
        const options = { method: 'GET' };
        let response = await fetch(URL, options);
        response = await response.json();

        // Render index.ejs with the API data
        res.render('index', response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.listen(3000, function () {
    console.log('Ares app listening on port 3000!');
});
