const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')
const Cors = require('@koa/cors')
const BodyParser = require('koa-bodyparser')
const Helmet = require('koa-helmet')
const respond = require('koa-respond')
const mongoose = require('mongoose')
const webpack = require('webpack')

const config = require('./webpack.config')
const app = new Koa()
const router = new Router()

require('./routes')(router)

const compiler = webpack(config)

if (process.env.NODE_ENV === 'development') {
  app.use(Logger())
    .use(async (ctx, next) => {
      const start = new Date()
      await next()
      const ms = new Date() - start
      console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
    })
}

app.use(Helmet())
  .use(Cors())
  .use(BodyParser({
    enableTypes: ['json'],
    strict: true,
    onerror: function (err, ctx) {
      ctx.throw('body parse error', 422)
    }
  }))
  .use(respond())

// API routes
app.use(router.routes())
  .use(router.allowedMethods())
  .use(require('koa-static')('./build'))

mongoose.connect(process.env. MONGODB_URI || 'mongodb://localhost/test')

module.exports = app
