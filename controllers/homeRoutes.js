const router = require('express').Router();
const { Machine, MachineAccess, Operator, Samples } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await Operator.findAll({
      attributes: { exclude: ['password'] },
      order: [['operator_name', 'ASC']],
    });

    const operators = userData.map((user) => user.get({ plain: true }));

    res.render('homepage', {
      operators,
      logged_in: req.session.logged_in,
    });

    // const userData = await Operator.findOne({ where: { email: req.body.email } });


  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
