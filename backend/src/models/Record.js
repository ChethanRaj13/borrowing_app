const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    amount: {type: Number, required: true},
    type: {type: String, enum: ["loan", "borrow"],required: true},
    date: {type: Date, default:Date.now},
},
    {timestamps: true}
);

module.exports = mongoose.model('Record', recordSchema);