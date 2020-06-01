const Router=require('koa-router');
const routers=new Router({prefix:"/pro"});
const {find,create,update,del}=require('../controllers/pro')
routers.get('/',find);
routers.put('/', update);//
routers.post('/',create);
routers.delete('/',del);//

module.exports=routers;