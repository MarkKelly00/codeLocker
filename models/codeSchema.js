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

  dateCreated: {
    type: Date,
    default: Date.now
  },

  dateModified: {
    type: Date,
    boolean: true,
  },

  isCloned: {
    type: Boolean 
  },

  originalId: {
    type: mongoose.Schema.Types.ObjectId
  },

  dateCloned: {
    type: Date
  },

  isPrivate: {
    type: Boolean
  }, 

});

const CodeBlock = mongoose.model("codeBlock", codeSchema);

module.exports = CodeBlock;