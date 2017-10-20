const bodyParser = require('body-parser'),
  session = require('express-session'),
  resStatus = require('express-res-status'),
  asyncMiddleWare = require('express-async-await'),
  {cookie: {cookieKey, maxAge}} = require('../config/dev')

module.exports = (app, passport) => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(resStatus())
  app.use(session({
    // store: new pgSession({pool}),
    secret: cookieKey,
    rolling: false,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge},
    secure: true,
  }))
  asyncMiddleWare(app)
  app.use(passport.initialize())
  app.use(passport.session())
}
