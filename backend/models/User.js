
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  location: { type: String },
  hobby: { type: String },
});

module.exports = mongoose.model('User', UserSchema);
