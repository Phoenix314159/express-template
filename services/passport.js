module.exports = (app, passport) => {
  // passport.use()
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser(async (req, user, done) => {
    // const {db: {users}} = req, {id} = user,
    //   foundUser = await users.findOne({id});
    done(null, foundUser)
  })
}
