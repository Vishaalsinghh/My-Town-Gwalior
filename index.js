const express = require('express')

const app = express()
const path = require('path');
const session = require('express-session')
const routes = require('./routes/index');




app.use(session({
    secret : 'myTown11',
    resave : true,
    saveUninitialized : true
  }));


app.get('/', routes)

 // Configure view engine to render EJS templates.
 app.set('views', __dirname + '/views');
 app.set('view engine', 'ejs');

  app.use(express.static(path.join(__dirname, '/views')));
 

 app.use('/', routes);
 
 const port_runing = 8000;

 app.listen(port_runing);

 console.log("Application running at: " + port_runing)

