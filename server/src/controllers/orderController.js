const { createOrder, findOrderById, findUserOrderHistory } = require("../services/orderService");


exports.createOrder=async(req,res)=>{
    const user = req.user;
    try {
        const order = await createOrder(user,req.body);
        return res.status(201).json({
            success:true,
            msg:"Order created successfully!",
            order
        })
    } catch (error) {
       return res.status(500).json({
            success:false,
            msg:"Internal server error",
            error:error.message
        })
    }
}

exports.findOrderById=async(req,res)=>{
    const user = req.user;
    const {id} = req.params;
    try {
        const order = await findOrderById(id);
        return res.status(200).json({
            success:true,
            order
        })
    } catch (error) {
       return res.status(500).json({
            success:false,
            msg:"Internal server error",
            error:error.message
        })
    }
}

exports.orderHistory=async(req,res)=>{
    const user = req.user;
    try {
        const order = await findUserOrderHistory(user._id);
        return res.status(200).json({
            success:true,
            order
        })
    } catch (error) {
       return res.status(500).json({
            success:false,
            msg:"Internal server error",
            error:error.message
        })
    }
}