const MONGOOSE = require('mongoose');
const SCHEMA = MONGOOSE.Schema;
const MODEL = MONGOOSE.model;

const USER_SCHEMA = new SCHEMA({
    name: {
        type: String,
        required: true,
        default: "Darrell Purcell"
    },
    email: {
        type: String,
        required: true,
        default: "dpurcell.pd@gmail.com"
    },
    password: {
        type: String,
        required: true,
        default: "pass123"
    }
    
});

const USER = MODEL('User', USER_SCHEMA);
module.exports = USER;