var express = require('express');
var mongoOp = require('../database/model/user');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Hello");
  var response = {};
        mongoOp.find({},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
});

router.post('/', function(req, res, next) {
  console.log(req.body.email, req.body.password);
  var db = new mongoOp();
       var response = {};
       // fetch email and password from REST request.
       // Add strict validation when you use this in Production.
       db.email = req.body.email;
       // Hash the password using SHA1 algorithm.
       db.password =  require('crypto')
                         .createHash('sha1')
                         .update(req.body.password)
                         .digest('base64');
       db.save(function(err){
       // save() will run insert() command of MongoDB.
       // it will add new data in collection.
           if(err) {
               response = {"error" : true,"message" : "Error adding data"};
           } else {
               response = {"error" : false,"message" : "Data added"};
           }
           res.json(response);
       });
});

module.exports = router;
