const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;
const MODEL = MONGOOSE.model;

const POST_SCHEMA = new SCHEMA(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      name: String,
      image: {
        data: Buffer,
        contentType: String,
      },
    },
  },
  { timestamps: true }
);

const POST = MODEL("Post", POST_SCHEMA);
module.exports = POST;
