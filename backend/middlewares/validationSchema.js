const Joi = require('joi')

const userSchema = Joi.object({
    username: Joi.string().required().min(3).max(20),
    password: Joi.string().required().min(6)

})

const noteSchema = Joi.object({
    title: Joi.string().required().min(3).max(30),
    content: Joi.string().required().max(200)
})

module.exports = {
    userSchema,
    noteSchema
}