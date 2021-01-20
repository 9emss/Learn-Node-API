// import module
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoClient = require('mongoose').MongoClient;

// initialize the app
const app = express()

// setupURL mongoDB
const url = 'mongodb+srv://Gemss:N4$1Sambel@gemssapi.vi2pw.mongodb.net/rest?retryWrites=true&w=majority';

// setup PORT
const PORT = process.env.PORT || 8080

// import routes
const apiRoutes = require('./routes/geapi-routes');

// config body-parser untuk handle request
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(bodyParser.json());

// config mongoDB
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});



// added check DB connection
if (!db) {
    console.log('Koneksi Error!');
} else {
    console.log('DB terkoneksi!');
}

// send message for default URL
app.get('/', (req, res) => res.send('Hello World!'));
// use API routes
app.use('/api', apiRoutes);
// launch app to listen PORT
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
