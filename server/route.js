var saveUser=require('./controller/SaveController.js')
var Route=require('./controller/RouteController.js')

module.exports=function(router){
router.post('/api/funapp/saveuser',saveUser.newSave);
router.get('/api/funapp/home',saveUser.home);
router.get('/api/funapp/login',saveUser.login)
router.post('/api/funapp/view',saveUser.view)
router.post('/api/route/postloc',Route.PostLoc)
router.get('/api/route/:tripId',Route.getLoc)
}
