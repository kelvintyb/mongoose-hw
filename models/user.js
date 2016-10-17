console.log('user model is running')


var mongoose = require('mongoose');

var paintingSchema = new mongoose.Schema({
  name: String,
  year: String,
  artist: String,
  price: Number,
  meta: {
    likes: Number
  }
});

var userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  paintings: [paintingSchema]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
