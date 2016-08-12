// INITIALIZER FOR MY EXPRESS APPLICATION

var express = require('express');
    morgan = require('morgan');
    bodyParser = require('body-parser');
    compress = require('compression');
    methodOverride = require('method-override');

module.exports = function() {
  var app = express();

//initialize the required module
  if( process.env.NODE_ENV === 'development' ) {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  }

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());
  app.use(methodOverride());

  require('../app/routes/index.server.routes')(app);
  return app;
};
