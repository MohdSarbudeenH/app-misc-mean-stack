const mongoose = require("mongoose");

const Module = mongoose.model('Module', {
    name: {
        type: String,
        required: true,
        unique: true
    },
    items: [
        {
            order: {
                type: Number,
                required: true,
                unique: true
            },
            name: {
                type: String,
                required: true,
                unique: true
            },
            url: {
                type: String,
                required: true,
                unique: true
            },
            imgPath: {
                type: String,
                required: true,
                unique: true
            }
        }
    ]
});

module.exports = Module