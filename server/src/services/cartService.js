const CartItem = require("../models/cartItemModel");
const Cart = require("../models/cartModel");
const Product = require("../models/productModel");

const createCart = async (user) => {
  try {
    const cart = new Cart({ user });
    await cart.save();

    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserCart = async (userId) => {
  try {
    let cartDoc = await Cart.findOne({ user: userId });

    let cartItems = await CartItem.find({ cart: cartDoc._id }).populate("product");
    let cart = cartDoc.toObject();
    cart.cartItems = cartItems;
    // console.log("cartItems", cartItems);
    
    let totalPrice = 25;
    let totalDiscountedPrice = 0;
    let totalItem = 0;
    
    for (let cartItem of cart.cartItems) {
      totalPrice += cartItem.price;
      totalDiscountedPrice += cartItem.discountedPrice;
      totalItem += cartItem.quantity;
    }
    
    cart.totalPrice = totalPrice;
    cart.totalItem = totalItem;
    cart.discounted = totalPrice - totalDiscountedPrice;
    
    // console.log("cart", cart);
    return cart;
  } catch (error) {
    console.log("error", error);
    throw new Error(error.message);
  }
};

const addToCartItem = async (userId,req) => {
  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      throw new Error("Cart not found");
    }
    const product = await Product.findById(req.productId);

    const isPresent = await CartItem.findOne({
      cart: cart._id,
      product: product._id,
      userId,
    });

    if (!isPresent) {
      const cartItems = new CartItem({
        product: req.productId,
        cart: cart._id,
        quantity: 1,
        userId,
        price: product.price,
        size: req.size,
        discountedPrice: product.discountedPrice,
      });

      const createdCartItem = await cartItems.save();
      cart.cartItems.push(createdCartItem);
      await cart.save();
      return cart;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createCart,
  findUserCart,
  addToCartItem,
};
