/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: function(req, res) {
    Articles.find().exec((err, articles) => {
      if (err) {
        res.send(500, { error: 'Database Error' });
      }
      res.view('list', { articles });
    });
  },
  add: function(req, res) {
    res.view('add');
  },
  create: function(req, res) {
    var title = req.body.title;
    var body = req.body.body;

    Articles.create({ title, body }).exec(err => {
      if (err) {
        res.send(500, { error: 'Database error' });
      }

      res.redirect('list');
    });
  },
  delete: function(req, res) {
    var id = req.params.id;
    Articles.destroy({ id }).exec(err => {
      if (err) {
        res.send(500, { error: 'Database error' });
      }

      res.redirect('/articles/list');
    });
  },
  edit: function(req, res) {
    const id = req.params.id;
    Articles.findOne({ id }).exec((err, article) => {
      if (err) {
        res.send(500, { error: 'Database error' });
      }
      res.view('edit', { article });
    });
  },
  update: function(req, res) {
    const id = req.params.id;
    const title = req.body.title;
    const body = req.body.body;

    Articles.update({ id }, { title, body }).exec(err => {
      if (err) {
        res.send(500, { error: 'Database error' });
      }

      res.redirect('/articles/list');
    });
  },
};
