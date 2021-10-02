const { Sequelize } = require('sequelize');
const Todo = require('./models/todo.model');
const User = require('./models/user.mode');
const Comment = require('./models/comments.model');
const Tag = require('./models/tags.model');

const DATABASE_URI = process.env.DATABASE_URI;

const sequelize = new Sequelize(DATABASE_URI, {
  // logging: console.log,
  ssl: true
});


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the Db Established');

    await sequelize.sync({
      // force: true
    });
    console.log('All models synchronized');
  } catch (err) {
    console.log(`ERROR : ${ err.message }`);
  }
})();


const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Todo = Todo(sequelize, Sequelize);
db.User = User(sequelize, Sequelize);
db.Tag = Tag(sequelize, Sequelize);
db.Comment = Comment(sequelize, Sequelize);

db.User.hasMany(db.Todo, { onDelete: 'cascade' });
db.Todo.belongsTo(db.User);

db.Todo.hasMany(db.Comment, { onDelete: 'cascade' });
db.Comment.belongsTo(db.Todo, { onDelete: 'cascade' });

db.Tag.belongsToMany(db.Todo, { through: 'tag_todo_join_table', as: 'TagsTodo' });
db.Todo.belongsToMany(db.Tag, { through: 'tag_todo_join_table', as: 'TodoTags' });

module.exports = db;

