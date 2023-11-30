const express = require('express');
const app = express();
const currencies = require('./json/currency.json'); // Use require to read JSON file

app.get('/api/currency', (req, res) => {
    res.json({'data':currencies});
});

app.listen(3000, () => {
    console.log('Listening at port 3000');
});