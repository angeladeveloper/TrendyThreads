const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {
    // define columns
    category_name: {
      type: DataTypes.STRING
    },
    category_id: {
      type: Seq.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
