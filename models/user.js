const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;
const MODEL = MONGOOSE.model;

const USER_SCHEMA = new SCHEMA({
  name: {
    type: String,    
    default: "Darrell Purcell",
  },
  email: {
    type: String,    
    default: "dpurcell.pd@gmail.com",
  },
  password: {
    type: String,    
    default: "pass123",
  },
});

const USER = MODEL("User", USER_SCHEMA);
module.exports = USER;
