const Joi = require('joi')

const userSchema = Joi.object({
    username: Joi.string().required().min(3).max(20),
    password: Joi.string().required().min(6)

})

module.exports = userSchema