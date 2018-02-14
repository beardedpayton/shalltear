const {User} = require('../models/')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

const jwtSignUser = user => {
  return jwt.sign(user, config.auth.jwtSecret, {
    expiresIn: '2 days'
  })
}

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
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'Email was not found or does not match'
        })
      }
      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Password did not match'
        })
      }
      const userToJson = user.toJSON()
      res.send({
        user: userToJson,
        token: jwtSignUser(userToJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'Error while signing up'
      })
    }
  }
}
