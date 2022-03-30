const express = require('express')

const router = express.Router()


module.exports = (controller) =>{
    router.get('/', controller.getMethod.bind(controller))
    router.post('/signup', controller.signup.bind(controller))
    return router
}

