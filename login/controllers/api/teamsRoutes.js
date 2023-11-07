const router = require('express').Router();
const { Teams } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newTeams = await Teams.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTeams);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const teamsData = await Teams.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!teamsData) {
      res.status(404).json({ message: 'No teams found with this id!' });
      return;
    }

    res.status(200).json(teamsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
