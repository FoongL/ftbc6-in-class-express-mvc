const express = require('express')

const router = express.Router()


module.exports = (controller) =>{
    router.get('/', controller.getMethod.bind(controller))
    router.get('/two', controller.myOwnGetMethod.bind(controller))
    return router
}

