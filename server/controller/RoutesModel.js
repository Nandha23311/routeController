var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/locationDB');

var Schema = mongoose.Schema;

var route = new Schema({
	tripId:{type:String},
	isCompleted:{type:Boolean,default:false},
	routes:[],
	completedAt:{type:Date}
});


var Routes = mongoose.model('routes', route);

module.exports = Routes;