var SaveUser=require('./../models/Save.js')
var path = require('path');
var HttpStatus=require('http-status')


exports.home=function(req,res){
    //res.sendFile(__dirname+'./../html/Home.html');
    res.sendFile(path.resolve(__dirname+'./../html/Home.html'));
}

exports.newSave=function(req,res){
    var reqBody=req.body;
    var mname1=reqBody.mname;
    var bfname1=reqBody.bfname
    var gfname1=reqBody.gfname
    var lname1=reqBody.lname
    var fname1=reqBody.fname

    var newUser = SaveUser({
       mname:mname1,
       bfname:bfname1,
       gfname:gfname1,
       lname:lname1,
       fname:fname1
    });

    newUser.save(function(err, data) {
      if (err) throw err;
      console.log(""+data);
      if(data){
      var name=data.mname;
      var names=["Abhila","abhila","abila","Abila"]
      var result=names.indexOf(name)
      if(result == -1){
            res.sendFile(path.resolve(__dirname+'./../html/display.html'));
            }
            else{
            res.sendFile(path.resolve(__dirname+'./../html/abihtml.html'));
            }

      }
    });
};
exports.login=function(req,res){
    res.sendFile(path.resolve(__dirname+'./../html/login.html'));

};
exports.view=function(req,res){
    var reqBody=req.body;	    	
    
	if(reqBody.uname){
		var uname=reqBody.uname;
		var pass=reqBody.pass;
		if(uname=="Nanda"&& pass=="funapp"){
		SaveUser.find({},"-_id -__v",function(err,List){
		console.log(List)
		var array =[];
		List.forEach(function(data){
			array.push({
			"           Name  ":data.mname,
			"           Boy Friend Name  ":data.bfname,
			"           Girl Friend Name  ":data.gfname,
			"           Lover Name"  :data.lname,
			"           Dreams Boy or Girl Name ":data.fname,
			"-----------------------------------------------":"----------------------------------------------",
			"-----------------------------------------------":"----------------------------------------------"
			})
		})
		res.json(array)
		})

		}
		else{	
		
		}
	}
	if(reqBody.pin){
		var pin=reqBody.pin;
		SaveUser.find({},"-_id -__v",function(err,List){
			
			res.status(HttpStatus.OK).json({
            status: 'success',
            code: HttpStatus.OK,
            data:List
            });
			
		})
		
	}
};

