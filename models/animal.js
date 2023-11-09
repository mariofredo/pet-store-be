"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Animal.hasMany(models.Favorite, {
        foreignKey: "animalId",
      });
      Animal.belongsTo(models.Category, {
        foreignKey: "categoryId",
      });
    }
  }
  Animal.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      categoryId: { type: DataTypes.INTEGER },
      diet: { type: DataTypes.STRING },
      food: { type: DataTypes.STRING },
      description: DataTypes.STRING,
      lifespan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Animal",
    }
  );
  return Animal;
};
