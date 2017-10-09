var mongoose = require('mongoose');

function connect() {
  mongoose.connect ('mongodb://localhost:27017/whoischatting', {useMongoClient: 'true'});
}

module.exports.connect = connect;
module.exports.mongoose = mongoose;
