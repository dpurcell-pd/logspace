require('dotenv').config();
const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

app.set('view engine', 'jsx');
app.set('views', `${__dirname}/views`);
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('Home');
});

app.listen(port, (req, res) => {
    console.log(`Now listening on port ${port}.`);
});