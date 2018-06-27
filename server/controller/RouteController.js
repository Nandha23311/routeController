var express=require('express');
var app=express();
var Routes=require('./RoutesModel.js');
var bodyParser=require("body-parser");
app.use(bodyParser.json());

exports.PostLoc=function(req,res){
	var reqBody=req.body;
	console.log("reqBody",reqBody)
	var tripId=reqBody.tripId;
	var isStarted=reqBody.isStarted;
	var isCompleted=reqBody.isCompleted;
	var coordinates=reqBody.coordinates;
	console.log("hitted");
	if(isStarted==true){
		Routes.findOne({tripId:tripId},function(err,routeData){
	if(err){
		res.send("FindErr",err)
	}
	if(routeData==null){
		console.log("tripId",tripId)
		var saveData={};			
		saveData.tripId=tripId;
		saveData.routes=[coordinates];			
		console.log("saveData",saveData)
		
		var SaveObj=Routes(saveData);
		
		SaveObj.save(function(err,saved){
			res.send("saved")
			console.log("saved",saved)
		})
		
	}else{			
		if(isCompleted==true){
			routeData.isCompleted=true;
			routeData.routes.push(coordinates)
			routeData.completedAt=new Date();				
			routeData.save(function(err,saved){
			res.send("saved")
			console.log("err,saved",saved)
			})
		}else{
			console.log("routeData",routeData)
			if(routeData.isCompleted==true){
				res.send("trip already Completed")
				console.log("trip already Completed")					
			}else{
				routeData.routes.push(coordinates)
				routeData.save(function(err,saved){
				res.send("saved")
				console.log("err,saved",saved)
			})
			
		}
		}
	}
	});
	}
	else{
		res.send("Trip Not Started")
	}	
}

exports.PostLoc=function(req,res){	
	var tripId=req.params.tripId;	
	Routes.findOne({tripId:tripId},function(err,routeData){
	if(err){
		res.send("FindErr",err)
	}	
	res.send(routeData)	
	})
}