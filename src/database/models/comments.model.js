
module.exports = (sequelize, Sequelize) => {
  const DataTypes = Sequelize.DataTypes;

  const Comment = sequelize.define('comment', {
    text: { type: DataTypes.STRING(1000) },
  }, { timestamps: true });

  return Comment;
};