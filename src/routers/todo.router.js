const { Router } = require('express');
const { createTodo, postComment, getComments, deleteComment } = require('../controllers/todo.controller');

const router = Router();

router.post('/comment/:id', postComment);
router.post('/', createTodo);

router.get('/comment/:id', getComments);

router.delete('/:todoId/comment/:id', deleteComment);

module.exports = router;