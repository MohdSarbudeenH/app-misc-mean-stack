const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = "mongodb://localhost:27017/?readPreference=primary&appname=appMisc%20Compass&directConnection=true&ssl=false";
// Connect MongoDB at default port 27017.
let mong = mongoose.connect(url, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});