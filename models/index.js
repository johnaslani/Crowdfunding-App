// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "product_tags",
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: "tag_products",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

Driver.hasOne(License, {
  foreignKey: "driver_id",
  onDelete: "CASCADE",
});

License.belongsTo(Driver, {
  foreignKey: "driver_id",
});

// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
Driver.hasMany(Car, {
  foreignKey: "driver_id",
  onDelete: "CASCADE",
});

// The association can also be created from the Car side
Car.belongsTo(Driver, {
  foreignKey: "driver_id",
});
