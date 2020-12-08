const mongoose = require("mongoose");

const {Schema} = mongoose;

const codeSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
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
  },

  dateCreated: {
    type: Date,
    default: Date.now
  },

  dateModified: {
    type: Date,
    default: Date.now,
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

  likesArr: {
    type: Array
  }

});

const CodeBlock = mongoose.model("codeBlock", codeSchema);

module.exports = CodeBlock;