var express=require("express");
var app=express();
var mongoose=require("mongoose");
var port = process.env.PORT || 9009;

///////////////////////////////////////////////////////////////////////
////////////Mongoose Connection///////////////////////////////////////

//var mongodbUri = 'mongodb://localhost/FunApp';
var mongodbUri = 'mongodb://nanda:nanda23311@ds163836.mlab.com:63836/livefunapp';



mongoose.connect(mongodbUri,options);
var conn = mongoose.connection;

var options = {
	server: {
		socketOptions: {
			keepAlive: 300000
		}
	}
};

conn.on('disconnected', function() {
	console.log('MongoDB disconnected!', moment().format('YYYY-MM-DD hh:mm'));
	setTimeout(function(){
		mongoose.connect(mongodbUri);
	}, 3000);
});

conn.on('error', function(error) {
	console.error('Error in MongoDB connection: ' + error);
	mongoose.disconnect();
});

conn.on('connected', function(){
	console.log('connected with MongoDB');
});

conn.once('open', function() {
	// Wait for the database connection to establish, then start the app.
});

var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


///////////////////////////////////////////////////////////////////////
////////////Mongoose Connection///////////////////////////////////////

require("./server/route.js")(app);
app.listen(port);
console.log('App is listening on port: ' + port);
console.log('http://localhost:' + port);

process.on('uncaughtException', function (err) {
	console.log(err);
	console.error((new Date()).toUTCString() + ' uncaughtException:', err.message);
	console.error(err.stack);
	//process.exit(1)
});
