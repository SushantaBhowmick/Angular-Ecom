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
      await topLevel.save();
    }

    let secondLevel = await Category.findOne({
      name: prodData.secondLevelCategory,
      parentCategory: topLevel._id,
    });

    if (!secondLevel) {
      secondLevel = new Category({
        name: prodData.secondLevelCategory,
        parentCategory: topLevel._id,
        level: 2,
      });
      await secondLevel.save();
    }
    let thirdLevel = await Category.findOne({
      name: prodData.thirdLevelCategory,
      parentCategory: secondLevel._id,
    });

    if (!thirdLevel) {
      thirdLevel = new Category({
        name: prodData.thirdLevelCategory,
        parentCategory: secondLevel._id,
        level: 3,
      });
      await thirdLevel.save();
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
    console.log(error)
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
    let {
      category,
      color,
      sizes,
      minPrice,
      maxPrice,
      minDiscount,
      sort,
      stock,
      pageNumber,
      pageSize,
    } = prodQuery;
    let query = Product.find().populate("category");
    if (category) {
      const existsCategory = await Category.findOne({ name: category });
      if (!existsCategory) {
        return { content: [], totalPages: 0, currentPages: 0 };
      }
      query.where("category").equals(existsCategory._id);
    }
    if (color) {
      const colorSet = new Set(color.split(",").map((c)=>c.trim().toLowerCase()));

      const colorRegex = colorSet.size >0 ? new RegExp([...colorSet].join("|"),"i") : null;
      query = query.where("color").regex(colorRegex);
    }

    if (sizes) {
      const sizeSet = new Set(sizes);
      query = query.where("sizes.name").in([...sizeSet]);
    }

    if (minPrice && maxPrice) {
     query = query.where("discountPrice").gte(minPrice).lte(maxPrice);
    }

    if (minDiscount) {
      query = query.where("discountedPercent").gte(minDiscount);
    }
    if (stock) {
      if(stock ==="in_stock"){
        query = query.where("quantity").gt(0);
      }
      else if(stock ==="out_of_stock"){
        query = query.where("quantity").lte(1);
      }
    }

    if(sort) {
      const sortDirection = sort === "price_high" ? -1 : 1;
      query = query.sort({discountedPrice: sortDirection});
    }

    const totalProducts = await Product.countDocuments(query);

    const skip=(pageNumber - 1) * pageSize;
    query = query.skip(skip).limit(pageSize)

    const products = await query.exec();

    const totalPages = Math.ceil(totalProducts/pageSize)

    return {content: products, totalPages, currentPage: pageNumber};

  } catch (error) {
    throw new Error(error.message);
  }
}

async function createMultipleProducts(products){
  try {
    for(let product of products){
      await createProduct(product)
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  createMultipleProducts,  
};
