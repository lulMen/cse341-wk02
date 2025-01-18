const express = require('express');
const cors = require('cors');
const data = require('../data/professional.json');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get('/professional', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});