var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://nanda:nanda23311@ds163836.mlab.com:63836/livefunapp');

var Schema = mongoose.Schema;

var route = new Schema({
	tripId:{type:String},
	isCompleted:{type:Boolean,default:false},
	routes:[],
	completedAt:{type:Date}
});


var Routes = mongoose.model('routes', route);

module.exports = Routes;