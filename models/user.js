"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helper/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Favorite, {
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.TEXT, allowNull: false },
      phoneNumber: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: (user, option) => {
          user.password = hashPassword(user.password);
        },
      },
    }
  );
  return User;
};
