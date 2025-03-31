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
    let cart = await Cart.findOne({ user: userId });

    let cartItems = await CartItem.find({ cart: cart._id }).populate("product");
    cart.cartItems = cartItems;

    let totalPrice = 0;
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

    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
};

const addToCartItem = async (userId) => {
  try {
    const cart = await Cart.findOne({ user: userId });
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
        size: req,
        size,
        discountedPrice: product.discountedPrice,
      });

      const createdCartItem = await cartItems.save();
      cart.cartItems.push(createdCartItem);
      await cart.save();
      return res.status(200).json({
        msg: "Item added to cart",
        cart,
      });
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
