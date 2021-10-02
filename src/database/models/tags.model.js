
module.exports = (sequelize, Sequelize) => {
  const DataTypes = Sequelize.DataTypes;

  const Tag = sequelize.define('tag', {
    title: { type: DataTypes.STRING(50) },
  }, { timestamps: true });

  return Tag;
};