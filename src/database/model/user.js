var database = require('../connection');

database.connect();

var user = {
  email: "String",
  password: "String"
};

var schema = database.mongoose.Schema(user);

module.exports = database.mongoose.model('user', schema);
