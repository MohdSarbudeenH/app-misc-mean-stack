// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

// const url = "mongodb://localhost:27017/?readPreference=primary&appname=appMisc%20Compass&directConnection=true&ssl=false";
// // Connect MongoDB at default port 27017.
// let mong = mongoose.connect(url, (err) => {
//     if (!err) {
//         console.log('MongoDB Connection Succeeded.')
//     } else {
//         console.log('Error in DB connection: ' + err)
//     }
// });

// Set up mongoose connection
var mongoose = require('mongoose');
//var dev_db_url = 'mongodb://localhost:27017/?readPreference=primary&appname=appMisc%20Compass&directConnection=true&ssl=false';
var dev_db_url = 'mongodb://127.0.0.1:27017/appMisc';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//const populatedb = require("./populateDb")