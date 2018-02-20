const {Song} = require('../models/')

module.exports = {
  async getAllSongs (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (error) {
      res.status(500).send({
        message: 'Trouble fetching songs from songs endpoint'
      })
    }
  },
  async post (req, res) {
    try {
      const songs = await Song.create(req.body)
      res.send(songs)
    } catch (error) {
      res.status(500).send({
        message: 'Trouble creating a new song on the songs endpoint'
      })
    }
  }
}
