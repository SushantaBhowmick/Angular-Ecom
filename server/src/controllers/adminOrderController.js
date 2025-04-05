const orderService = require('../services/orderService');

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        return res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });  
    }
}

exports.confirmOrder = async (req, res) => {
    const {orderId} = req.params
    try {
        const order =  await orderService.confirmOrder(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        return res.status(200).json(orders);    
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.shippedOrder = async (req, res) => {
    const {orderId} = req.params
    try {
        const order =  await orderService.ShipOrder(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        return res.status(200).json(orders);    
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deliverOrder = async (req, res) => {
    const {orderId} = req.params
    try {
        const order =  await orderService.deliveredOrder(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        return res.status(200).json(orders);    
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.cancelOrder = async (req, res) => {
    const {orderId} = req.params
    try {
        const order =  await orderService.cancelOrder(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        return res.status(200).json(orders);    
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteOrder = async (req, res) => {
    const {orderId} = req.params
    try {
        const order =  await orderService.deleteOrder(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        return res.status(200).json(orders);    
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}