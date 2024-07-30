const router = require('express').Router();
const { Machine, MachineAccess, Operator, Samples } = require('../models');
const withAuth = require('../utils/auth');


console.log({ Operator });
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

router.get('/audit', async (req, res) => {

  res.render('audit');
});


router.get("/operator", async (req, res) => {
  console.log("========================================== operator ======================================")

  const userData = await Operator.findAll({
    attributes: { exclude: ['password'] },
    order: [['operator_name', 'ASC']],
  });
  console.log("========================================== operator USER DATA ======================================")
  console.log(userData)

  const operators = userData.map((user) => user.get({ plain: true }));

  res.render('oppo', {
    operators,
    logged_in: req.session.logged_in,
  });
})



module.exports = router;
