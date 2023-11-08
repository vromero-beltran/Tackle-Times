const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Team, User } = require('../models');



router.get('/', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the their teams
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
}
});

router.get('/team/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
    } else {
      // If the user is logged in, allow them to view the teams
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
    }
});

// Use withAuth middleware to prevent access to route
router.get('/myfavoriteteams', withAuth, async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      // If the user is logged in, allow them to view the their teams
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
    }
});

// Use withAuth middleware to prevent access to route
router.get('/favoritesSecltionPage', withAuth, async (req, res) => {
      // If the user is not logged in, redirect the user to the login page
      if (!req.session.loggedIn) {
        res.redirect('/login');
      } else {
        // If the user is logged in, allow them to view the their teams
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
