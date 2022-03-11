const servers = require('../servers')
const { scmUser } = require('../schema/index')

const routes = [
  {
    method: 'post',
    path: '/api/user/login.htm',
    valid: scmUser.login,
    server: servers.userSer.login,
  },
]

module.exports = routes
