var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var filmBookmarkSchema = new Schema({
  _id: Number,
  bookmark: Boolean
});

var FilmBookmark = mongoose.model('FilmBookmark', filmBookmarkSchema);

module.exports = FilmBookmark;
