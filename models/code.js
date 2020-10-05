const mongoose = require('mongoose');

const {Schema} = mongoose;

// create a schema
const messageSchema = new Schema({
  // You may need to add other fields like owner
  addedOn: String,
  message: String,
});
const Message = mongoose.model('Message', messageSchema);
module.exports = Message;