const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')
const Cors = require('@koa/cors')
const BodyParser = require('koa-bodyparser')
const Helmet = require('koa-helmet')
const respond = require('koa-respond')
const serve = require('koa-static')
const mongoose = require('mongoose')

const app = new Koa()
const router = new Router()

require('./routes')(router)

if (process.env.NODE_ENV === 'development') {
  app.use(Logger()).use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`) // eslint-disable-line no-console
  })
}

app
  .use(Helmet())
  .use(Cors())
  .use(
    BodyParser({
      enableTypes: ['json'],
      strict: true,
      onerror: function(err, ctx) {
        ctx.throw('body parse error', 422)
      },
    }),
  )
  .use(serve(__dirname + '/dist'))
  .use(respond())

// API routes
app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(require('koa-static')('./build'))

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/koa-experiment',
)

module.exports = app
