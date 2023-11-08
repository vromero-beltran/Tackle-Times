const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Team, User } = require('../models');



router.get('/', async (req, res) => {
  try {
    // Get all teams and JOIN with user data
    const teamData = await Team.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const teams = teamData.map((team) => team.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('login', { 
      teams, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/team/:id', async (req, res) => {
  try {
    const teamData = await Team.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const team = teamData.get({ plain: true });

    res.render('team', {
      ...team,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/myfavoriteteams', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Team }],
    });

    const user = userData.get({ plain: true });

    res.render('myfavoriteteams', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/favoritesSecltionPage', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Team }],
    });

    const user = userData.get({ plain: true });

    res.render('favoritesSecltionPage', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/myfavoriteteams');
    return;
  }

  res.render('login');
});
module.exports = router;
