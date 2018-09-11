/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const bcrypt = require('bcryptjs');

module.exports = {
  new: (req, res) => {
    res.locals.flash = _.clone(req.session.flash);
    res.view('user/new');
    req.session.flash = {};
  },
  create: (req, res) => {
    const salt = bcrypt.genSaltSync(8);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    User.create({
      name: req.body.name,
      title: req.body.title,
      email: req.body.email,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).exec((err, user) => {
      if (err) {
        console.log(err);
        req.session.flash = { err };
        return res.redirect('/user/new');
      }
      res.status(200).send(JSON.stringify(user));
      req.session.flash = {};
    });
  },
};
