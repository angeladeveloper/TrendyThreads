// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { DataTypes } = require('sequelize');

// Products belongsTo Category
Category.hasMany(Product, {
  foreignKey: 'category_id',
});
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: "product_id",
  through: { ProductTag, unique: false }
});
Tag.belongsToMany(Product, {
  foreignKey: "tag_id",
  through: { ProductTag, unique: false }
});
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
