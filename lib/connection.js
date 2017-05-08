var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var dbUrl = 'mongodb://oleh.kapral:vodoley14@ds145245.mlab.com:45245/hra';
mongoose.connect(dbUrl);
// Close the Mongoose connection on Control+C
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected');
        process.exit(0);
    });
});
require('../models/employee');
require('../models/team');