const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('../db/connect');
const professionalRoutes = require('./routes/professional');
const contactsRoutes = require('./routes/contacts');

const port = process.env.PORT || 8080;
const app = express();

app
    .use(bodyParser.json())
    .use(cors())
    .use('/professional', professionalRoutes)
    .use('/contacts', contactsRoutes);

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Server running at http://localhost:${port}`);
    }
});
