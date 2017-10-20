const express = require('express'),
  app = express(),
  path = require('path'),
  {port} = require('./config/dev'),
  passport = require('passport')

//<------ production -------->
// process.env.PWD = process.cwd()
// app.use(express.static(path.join(process.env.PWD, '/dist')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(process.env.PWD, '/dist/index.html'))
// })
//<-------------------------->

require('./services/passport')(passport)
require('./middleware/main')(app, passport)
require('./routes/auth')(app, passport)
require('./routes/rename-me1')(app)
require('./middleware/serverError')(app)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
