const { Todo, User, Comment } = require('../database');

async function createTodo(req, res) {
  try {
    const { title, author, completed, category, userId } = req.body;

    const todo = await Todo.create({
      title,
      author,
      completed,
      category,
      userId
    });

    res.status(201).json({ todo });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

async function postComment(req, res) {
  try {
    const { id } = req.params;
    const { text } = req.body;

    const comment = await Comment.create({
      text,
      todoId: id
    });

    res.status(201).json({ success: true, comment });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}

async function getComments(req, res) {
  try {
    const { id } = req.params;
    const todo = await Todo.findByPk(id, {
      include: [
        {
          model: Comment,
        }
      ]
    });

    res.json({ todo });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function deleteComment(req, res) {
  try {
    const { todoId, id } = req.params;

    const comment = await Comment.findByPk(id, { where: { todoId } });

    await comment.destroy();

    res.json({ message: 'deleted', id });

  } catch (error) {

    console.log(err);

    res.status(500).json({ error });

  }
}

async function addTags(req, res) {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const todo = await Todo.findByPk(id)

    const tags = await todo.addTag({})
    
  } catch (error) {

  }
}

module.exports = { createTodo, postComment, getComments, deleteComment };