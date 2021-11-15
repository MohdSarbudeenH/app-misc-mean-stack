console.log('Adding master data..');

//to check all collections in db..
// mongoose.connection.db.listCollections().toArray(function(err, names) {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 names.forEach(function(e,i,a) {
//                     //mongoose.connection.db.dropCollection(e.name);
//                     console.log("--->>", e.name);
//                 });
//             }
//         });

var mongoose = require('mongoose');
var async = require('async');
var Module = require('./models/module');
var modules = [];

function moduleEntry(name, items, cb) {
    module = {
        name: name,
        items: items
    }

    var newModule = new Module(module);
    newModule.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New Module: ' + module);
        modules.push(module)
        cb(null, module)
    });

}

function createModules(cb) {
    async.series([
        function (callback) {
            var items = [];
            moduleEntry('hub', items, callback);
        },
        function (callback) {
            var items = [{
                order: 1,
                name: 'Dashboard',
                url: '/dre/dashboard',
                img: ''
            },
            {
                order: 2,
                name: 'Release',
                url: '/dre/release',
                img: ''
            },
            {
                order: 3,
                name: 'PCR',
                url: '/dre/pcr',
                img: ''
            },
            {
                order: 4,
                name: 'Test Case',
                url: '/dre/test-case',
                img: ''
            }
            ];
            moduleEntry('dre', items, callback);
        },
        function (callback) {
            var items = [{
                order: 1,
                name: 'Guidelines',
                url: '/guidelines',
                img: ''
            }
            ];
            moduleEntry('guidelines', items, callback);
        },
    ], cb)
}

async.series([
    createModules
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Modules uploaded');
    }
    // All done, disconnect from database
    mongoose.connection.close();
});