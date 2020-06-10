const Router = require('koa-router');
const routers = new Router({ prefix: '/status' });
const { find, create, update } = require('../controllers/status');
routers.get('/', find);
routers.post('/', create);
routers.put('/', update);
module.exports = routers;
