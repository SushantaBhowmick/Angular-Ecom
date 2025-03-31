const Address = require("../models/addressModel");
const OrderItem = require("../models/orderItemsModel");
const Order = require("../models/orderModel");
const cartService = require("./cartService");

async function createOrder(user, shippAddress) {
  let address;
  if (shippAddress._id) {
    let isExist = await Address.findById(shippAddress._id);
    address = isExist;
  } else {
    address = new Address(shippAddress);
    address.user = user;
    await address.save();

    user.address.push(address);
    await user.save();
  }

  const cart = await cartService.findUserCart(user._id);
  const orderItems = [];

  for (const item of cart.cartItems) {
    const orderItem = new OrderItem({
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discountedPrice: item.discountedPrice,
    });

    const createdOrderItem = await orderItem.save();
    orderItems.push(createdOrderItem);
  }

  const createdOrder = new Order({
    user,
    orderItems,
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discounts: cart.discounts,
    totalItem: cart.totalItem,
    shippingAddress: address,
  });

  const savedOrder = await createdOrder.save();
  return savedOrder;
}

async function placeOrder(orderId) {
  const order = await findOrderById(orderId);

  (order.orderStatus = "PLACED"), (order.paymentDetails.status = "COMPLETED");
  return await order.save();
}

async function confirmOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CONFIRMED";
  return await order.save();
}

async function ShipOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "SHIPPED";
  return await order.save();
}

async function deliveredOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "DELIVERED";
  return await order.save();
}

async function cancelOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CANCELLED";
  return await order.save();
}

async function findOrderById(orderId) {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "products" } })
    .populate("shippingAddress");

  return await order.save();
}

async function findUserOrderHistory(userId) {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAllOrders(userId) {
  try {
    const orders = await Order.find()
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
      
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deleteOrder(orderId){
  try {
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(order)

    return true;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createOrder,
  placeOrder,
  confirmOrder,
  ShipOrder,
  deliveredOrder,
  cancelOrder,
  findOrderById,
  findUserOrderHistory,
  getAllOrders,
  deleteOrder
};
