const CartItem = require("../models/cartItemModel");
const { updateCartItem, removeCartItem } = require("../services/cartItemService");



exports.updateCartItem = async (req, res) => {
    const user = await req.user;
    const { id } = req.params;
    try {

        const updatedCartItem = await updateCartItem(user._id,id,req.body);
        return res.status(200).json({
            success: true,
            msg: "Cart item updated successfully!",
            updatedCartItem
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Internal server error",
            error: error.message,
        });  
    }
}

exports.removeCartItem = async (req, res) => {
    const user = await req.user;
    const { id } = req.params;
    try {

        await removeCartItem(user._id,id);
        return res.status(200).json({
            success: true,
            msg: "Cart item removed successfully!",
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Internal server error",
            error: error.message,
        });  
    }
}