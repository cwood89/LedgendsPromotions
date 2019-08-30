var db = require("./models");

module.exports = function (app) {
  // full text search
  app.get("/songs/:search", function (req, res) {
    db.Song.find({ $text: { $search: req.params.search } })
      .then(function (dbSong) {
        res.json(dbSong);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
};

