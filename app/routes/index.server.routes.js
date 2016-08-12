module.exports = function(app) {
  //middleware for routing
  var index = require('../controllers/index.server.controller');
  var about = require('../controllers/about.server.controller');
  var contact = require('../controllers/contact.server.controller');

  app.get('/', index.render);
  app.get('/', about.render);
  app.get('/', contact.render);
};
