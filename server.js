require('dotenv').config();
const EXPRESS = require('express');
const MULTER = require('multer');
const IMAGE = require('./models/post')
const APP = EXPRESS();
const PORT = 3000;

const MONGOOSE = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;
MONGOOSE.connect(MONGO_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true
});

const DB = MONGOOSE.connection;
DB.on('error', (err) => console.log(err.message + ' is mongo not running?'));
DB.on('open', () => console.log('mongo connected: ', MONGO_URI));
DB.on('close', () => console.log('mongo disconnected'));

APP.set('view engine', 'jsx');
APP.set('views', `${__dirname}/views`);
APP.engine('jsx', require('express-react-views').createEngine());

APP.use(EXPRESS.static('public'));
APP.use(EXPRESS.urlencoded({extended: false}));

const STORAGE = MULTER.memoryStorage();
const UPLOAD = MULTER({storage: STORAGE});

APP.get('/', (req, res) => {
    res.render('Home');
});

APP.post('/upload', UPLOAD.single('image'), async (req, res) => {
    const NEW_IMAGE = new IMAGE({
        name: req.file.originalname,
        image: {
            data: req.file.buffer,
            contentType: req.file.mimetype
        }
    }); 
    await NEW_IMAGE.save();
});


APP.listen(PORT, (req, res) => {
    console.log(`Now listening on port ${PORT}.`);
});