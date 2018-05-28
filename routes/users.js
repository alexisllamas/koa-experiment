const Router = require('koa-router')
const Ctrl = require('../controllers/users')

const router = new Router()

router.get('/', Ctrl.hello)

module.exports = router.routes()
