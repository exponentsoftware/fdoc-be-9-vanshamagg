const { Todo, User, Comment } = require('../database');

async function getUserDetails(req, res) {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId, {
      include: [
        {
          model: Todo,
          include: [
            { model: Comment }
          ]
        }
      ]
    });

    res.json({ user });

  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

module.exports = { getUserDetails };