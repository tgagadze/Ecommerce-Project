import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    weight: {
        type: Number,
        reqire: true
    },
    currentPrice: {
        type: Number,
        reqire: true,
    },
    oldPrice: {
        type: Number,
        default: 0
    },
    sold: {
        type: Number,
    },
    imageURL: {
        type: String,
    }
},{timestamps:true});

module.exports = mongoose.model('Product', productSchema);