
var db = require("../models");


module.exports = function (app) {

  app.get("/api/search/:search", (req, res) => {
    let search = req.params.search

    db.Song.find({
      "$or": [
        { "name": { "$regex": search, "$options": "i" } },
        { "artist": { "$regex": search, "$options": "i" } }
      ]
    })
      .then(results => {
        res.send(results)
      })
  })

  app.get("/api/search/artist/:search", (req, res) => {
    let search = req.params.search
    db.Song.find({ "artist": { "$regex": search, "$options": "i" } })
      .then(results => {
        console.log("artist")
        console.log(results)
        res.json(results)
      })
  })

  app.get("/api/search/song/:search", (req, res) => {
    let search = req.params.search
    db.Song.find({ "name": { "$regex": search, "$options": "i" } })
      .then(results => {
        console.log("song")
        console.log(results)
        res.json(results)
      })
  })
}