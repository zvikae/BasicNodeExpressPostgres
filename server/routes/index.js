const pagesController = require('../controllers').pages;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Pages API!',
  }));

  app.post('/api/pages', pagesController.create);
  app.get('/api/get_pages', pagesController.list);
};