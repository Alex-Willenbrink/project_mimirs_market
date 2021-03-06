"use strict";
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define(
    "Category",
    {
      name: DataTypes.STRING
    }
  );

  // Category.associate = function(models) {
  //   Category.hasMany(models.Product, {
  //     foreignKey: "categoryId"
  //   });
  // };

  Category.associate = function(models) {
    Category.hasMany(models.Product);
  };

  return Category;
};
