var mongoose = require('mongoose');

var paintingSchema = new mongoose.Schema({
  name: String,
  year: String,
  artist: String,
  price: Number
  meta: {
    likes: Number
  }
});

var Painting = mongoose.model('Painting', paintingSchema);

module.exports = Painting;
