const Joi = require('@hapi/joi')

const scmUser = {
  login: Joi.object({
    email: Joi.string().required(),
    passwd: Joi.string().required(),
  }),
}

module.exports = {
  scmUser,
}
