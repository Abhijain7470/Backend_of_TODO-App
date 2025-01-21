const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    }
}, { timestamps: true }); // Adds 'createdAt' and 'updatedAt' fields automatically

module.exports = mongoose.model('ToDo', todoSchema);