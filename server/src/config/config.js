module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB || 'fullstackapp',
    username: process.env.USER || 'admin',
    password: process.env.PASS || 'admin',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      sotrage: process.env.STORAGE || 'fullstackapp.sqlite'
    }
  },
  auth: {
    jwtSecret: 'secret'
  }
}
