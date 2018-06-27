var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NameSchema = new Schema({
  mname: String,
  bfname: String,
  gfname: String,
  lname:String,
  fname:String
});


var names = mongoose.model('funapp', NameSchema);

module.exports =names;