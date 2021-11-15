const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var moduleSchema = new Schema({
    name:String,
    items: [{
        order: Number,
        name: String,
        url:String,
        img:String
    }]
}, {collection: 'module'})

// const Module = mongoose.model('Module', {
//     name: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     items: [
//         {
//             order: {
//                 type: Number,
//                 required: true,
//                 unique: true
//             },
//             name: {
//                 type: String,
//                 required: true,
//                 unique: true
//             },
//             url: {
//                 type: String,
//                 required: true,
//                 unique: true
//             },
//             img: {
//                 type: String,
//                 required: true,
//                 unique: true
//             }
//         }
//     ]
// });

//module.exports = Module

module.exports = mongoose.model('Module', moduleSchema, 'module');