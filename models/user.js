const MONGOOSE = require('mongoose');
const SCHEMA = MONGOOSE.Schema;
const MODEL = MONGOOSE.model;

const USER_SCHEMA = new SCHEMA({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
});

const USER = MODEL('User', USER_SCHEMA);
module.exports = USER;