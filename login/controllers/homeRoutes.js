const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Teams, User } = require('../models');


router.get('/', async (req, res) => {
  try {
    // Get all teams and JOIN with user data
    const teamData = await Teams.findAll({
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

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Use withAuth middleware to prevent access to route
router.get('/favteam', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('myFavoriteTeams', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
