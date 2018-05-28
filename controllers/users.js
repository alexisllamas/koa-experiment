function hello (ctx) {
  let user = ctx.request.query
  ctx.ok({ ...user })
}

module.exports = {
  hello
}
