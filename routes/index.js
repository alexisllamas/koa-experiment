module.exports = (router) => {
  router.prefix('/api')
  router.use('/todos', require('./todos'))
}
