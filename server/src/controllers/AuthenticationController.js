const {User} = require('../models/')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJSON = user.toJSON()
      res.send(userJSON)
    } catch (err) {
      res.status(400).send({
        error: `The email ${req.body.email} is already registered`
      })
    }
  }
}
