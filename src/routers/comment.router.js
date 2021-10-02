const { Router } = require('express');
const { createTodo } = require('../controllers/todo.controller');
const router = Router();

router.post('/', createTodo);

module.exports = router;