var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var filmBookmarkSchema = new Schema({
  id: Number,
  state: Boolean
});

var FilmBookmark = mongoose.model('FilmBookmark', filmBookmarkSchema);

module.exports = FilmBookmark;
