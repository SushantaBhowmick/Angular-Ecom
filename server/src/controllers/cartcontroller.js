const { findUserCart, addToCartItem } = require("../services/cartService");


exports.findUserCart=async(req,res)=>{
    const user = req.user;
    try {
        const cart = await findUserCart(user._id)
        return res.status(200).json({
            success:true,
            msg:"Get user cart successfully!",
            cart
        })
    } catch (error) {
       return res.status(500).json({
            success:false,
            msg:"Internal server error",
            error:error.message
        })
    }
}

exports.addItemToCart=async(req,res)=>{
    const user = req.user;
    try {
        const cartItem = await addToCartItem(user._id,req.body);
        console.log(cartItem)
        return res.status(200).json({
            success:true,
            msg:"Item added to Cart!",
            cartItem
        })
    } catch (error) {
       return res.status(500).json({
            success:false,
            msg:"Internal server error",
            error:error.message
        })
    }
}