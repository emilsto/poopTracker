const mongoose = require('mongoose');

const PoopSchema = mongoose.Schema({
    tunti : {
        type: String,
        required: true,
    },
    kesto : {
        type: Number,
        required: true,
    },
    date : {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('poop', PoopSchema);