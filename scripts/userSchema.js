const mongoose = require("mongoose");

const {Schema} = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    required: "Name is Required"
  },

  _Id: {
    type: Number,
    unique: true,
    required: true
  },

  userImage: {
    data: Buffer,
    contentType: String
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  date: {
    type: Date,
    default: Date.now
  },

  lastLoginDate: {
    type: Date,
    default: Date.now
},

  snipsArr: {
    type: Array,
    //please update here
  }
});

schema.statics.login = function login(id, callback) {
  return this.findByIdAndUpdate(id,{'$set' : { 'lastLoginDate' : Date.now()} }, { new : true }, callback);
};

const userSchema = mongoose.model(userSchema);

module.exports = userSchema;