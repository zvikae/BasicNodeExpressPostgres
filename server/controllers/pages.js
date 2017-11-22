const Page = require('../models').Page;

module.exports = {
  create(req, res) {
    return Page
      .create({
        url: req.body.url,
        datetime: req.body.datetime
      })
      .then(page => res.status(201).send(page))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
  return Page
    .all()
    .then(pages => res.status(200).send(pages))
    .catch(error => res.status(400).send(error));
  },
};