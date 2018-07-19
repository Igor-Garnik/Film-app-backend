var express = require('express');
var router = express.Router();
var FilmBookmark = require('./../models/film.bookmark.model');

router
  .get('/bookmarks', function(req, res) {
    var query = { _id: { $in: req.query.filmIds.split(',') } };
    FilmBookmark.find(query, function(err, bookmarks) {
      if (err) throw err;
      res.send(bookmarks);
    });
  })
  .post('/bookmarks', function(req, res) {
    var bookmark = new FilmBookmark({
      _id: req.body.filmId,
      bookmark: true
    });
    bookmark.save(function(err) {
      if (err) throw err;
      res.send(bookmark);
    });
  })
  .delete('/:id/bookmarks', function(req, res) {
    var query = { _id: req.params.id };
    FilmBookmark.deleteOne(query, function(err) {
      if (err) throw err;
      res.send({ _id: req.params.filmId });
    });
  });

module.exports = router;