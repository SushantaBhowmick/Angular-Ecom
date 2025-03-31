const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"users"
    },

    mobile:{
        type: String
    }
}, {
    timestamps: true
});

const Address = mongoose.model('addresses', AddressSchema);

module.exports = Address;