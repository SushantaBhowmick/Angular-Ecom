const CartItem = require("../models/cartItemModel");
const Cart = require("../models/cartModel");
const userService = require("../services/userService");

const updateCartItem = async (userId, cartItemId, cartItemData) => {
  try {
    const item = await findCartItemById(cartItemId);
    if (!item) {
      throw new Error("cart item not found: ", cartItemId);
    }
    const user = await userService.findUserById(item.userId);
    if (!user) {
      throw new Error("user not found: ", userId);
    }
    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;

      const updateCartItem = await item.save();

      return updateCartItem;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const removeCartItem = async (userId, cartItemId) => {
  try {
    const cartItem = await findCartItemById(cartItemId);
    if (!cartItem) {
      throw new Error("cart item not found: ", cartItemId);
    }
    const user = await userService.findUserById(cartItem.userId);
    if (!user) {
      throw new Error("user not found: ", userId);
    }

    if (user._id.toString() === cartItem.userId.toString()) {
      await CartItem.findByIdAndDelete(cartItemId);

      await Cart.updateOne(
        { user: userId },
        {
          $pull: { cartItems: cartItemId },
        }
      );
    }else{
      throw new Error("You can't remove another user's item");
    }
    
  } catch (error) {
    throw new Error(error.message);
  }
};

async function findCartItemById(cartItemId) {
  const cartItem = await CartItem.findById(cartItemId).populate("product");
  if (cartItem) {
    return cartItem;
  } else {
    throw new Error("Cart item not found");
  }
}

module.exports = {
  updateCartItem,
  removeCartItem,
  findCartItemById
};
