const login = async (ctx) => {
  console.log('---',ctx.request.body)
  const { email, passwd } = ctx.request.body
  ctx.body = email + passwd + '哈哈'
}

module.exports = {
  login,
}
