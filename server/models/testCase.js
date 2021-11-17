const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var testCaseSchema = new Schema({
    projectId: String,
    testCaseNo: Number,
    testCaseValue: String
}, {collection: 'testCase'})


module.exports = mongoose.model('TestCase', testCaseSchema);