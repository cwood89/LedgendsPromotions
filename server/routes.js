var db = require("./models");

module.exports = function (app) {

  app.get("/songs/:artist", function (req, res) {
    db.Song.find({ artist: req.params.artist })
      .then(function (dbSong) {
        res.json(dbSong);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
};

