
module.exports = (sequelize, Sequelize) => {
  const DataTypes = Sequelize.DataTypes;

  const User = sequelize.define('user', {
    name: { type: DataTypes.STRING(50) },
    email: { type: DataTypes.STRING(50) },
    username: { type: DataTypes.STRING(50) },
    phone: { type: DataTypes.TEXT },
    role: { type: DataTypes.TEXT, default: 'user' },

  }, { timestamps: true });

  return User;
};