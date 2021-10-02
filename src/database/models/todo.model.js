
module.exports = (sequelize, Sequelize) => {
  const DataTypes = Sequelize.DataTypes;

  const Todo = sequelize.define('todo', {
    title: { type: DataTypes.STRING(50) },
    author: { type: DataTypes.STRING(50) },
    completed: { type: DataTypes.BOOLEAN },
    category: { type: DataTypes.STRING(50) }
  }, { timestamps: true });

  return Todo;
};