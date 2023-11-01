const withAuth = (req, res, next) => {
  // TODO: If the user is not logged in, redirect the user to the login page
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    // TODO: If the user is logged in, allow them to view the teams
    next();
  }
};

module.exports = withAuth;
