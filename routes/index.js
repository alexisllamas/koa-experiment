module.exports = router => {
  router.get('*', )
  router.prefix('/api')
  router.use('/todos', require('./todos'))
}
