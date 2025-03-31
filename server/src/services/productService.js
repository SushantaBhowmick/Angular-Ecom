const Category = require("../models/categoryModel");
const Product = require("../models/productModel");

async function createProduct(prodData) {
  try {
    let topLevel = await Category.findOne({ name: prodData.topLevelCategory });
    if (!topLevel) {
      topLevel = new Category({
        name: prodData.topLevelCategory,
        level: 1,
      });
    }

    let secondLevel = await Category.findOne({
      name: prodData.secondLevelCategory,
      parentCategory: topLevel._id,
    });

    if (!secondLevel) {
      topLevel = new Category({
        name: prodData.secondLevelCategory,
        parentCategory: topLevel._id,
        level: 2,
      });
    }
    let thirdLevel = await Category.findOne({
      name: prodData.thirdLevelCategory,
      parentCategory: secondLevel._id,
    });

    if (!thirdLevel) {
      topLevel = new Category({
        name: prodData.thirdLevelCategory,
        parentCategory: secondLevel._id,
        level: 3,
      });
    }

    // category: thirdLevel ? thirdLevel._id : secondLevel ? secondLevel._id : topLevel._id,

    const product = new Product({
      title: prodData.title,
      description: prodData.description,
      price: prodData.price,
      discountedPrice: prodData.discountedPrice,
      discountedPercent: prodData.discountedPercent,
      category: thirdLevel._id,
      quantity: prodData.quantity,
      bands: prodData.bands,
      color: prodData.color,
      imageUrl: prodData.imageUrl,
      ratings: prodData.ratings,
      sizes: prodData.sizes,
      reviews: prodData.reviews,
      numOfRatings: prodData.numOfRatings || 0,
    });

    return await product.save();
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deleteProduct(productId) {
  try {
    const product = await findProductById(productId);

    await Product.findByIdAndDelete(productId);

    return "Product deleted successfully!";
  } catch (error) {
    throw new Error(error.message);
  }
}

async function updateProduct(productId, prodData) {
  try {
    return await Product.findByIdAndUpdate(productId, prodData);
  } catch (error) {
    throw new Error(error.message);
  }
}
async function findProductById(productId) {
  try {
    const product = await Product.findById(productId)
      .populate("category")
      .exec();

    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function getAllProducts(prodQuery) {
  try {
   
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
};
