
var db = require("../models");


module.exports = function (app) {
  app.get("/api/search/:search", (req, res) => {
    let search = req.params.search
    console.log(search)
    db.Song.find({ $text: { $search: search } })
      .then(res => {
        console.log(res)
      })
  })
}