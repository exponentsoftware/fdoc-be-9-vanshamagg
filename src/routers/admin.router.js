const { Router } = require('express');
const { getUserDetails } = require('../controllers/admin.controller');
const { User } = require('../database');

const authMiddleware = async (req, res, next) => {

  const adminUserId = req.headers['authorization'];
  const adminUser = await User.findByPk(parseInt(adminUserId), { where: { id: parseInt(adminUserId), role: 'admin' } });

  if(adminUser) next()
  else next(new Error('Unoothorized'))
};

const router = Router();

router.get('/user/:userId', authMiddleware, getUserDetails);

module.exports = router;