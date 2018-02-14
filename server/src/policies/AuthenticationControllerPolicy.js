const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/)
    }
    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Invalid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Invalid password'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid login information'
          })
      }
    } else {
      next()
    }
  }
}
