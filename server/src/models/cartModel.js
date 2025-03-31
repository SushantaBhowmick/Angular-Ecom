const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    cartItems: [
        {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'cartItems',
                required: true
        }
    ],
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

CartSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Cart = mongoose.model('cart', CartSchema);

module.exports = Cart;