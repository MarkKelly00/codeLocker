const mongoose = require("mongoose");

const {Schema} = mongoose;

const codeSchema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
  },

  code: {
    type: String,
    trim: false,
    required: "Code is Required"
  },

  title: {
    type: String,
    required: true
  },

  tags: {
    type: Array,
    trim: false,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },

});

const CodeBlock = mongoose.model("codeBlock", codeSchema);

module.exports = CodeBlock;