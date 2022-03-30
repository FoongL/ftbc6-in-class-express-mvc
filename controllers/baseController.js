class BaseController {
    constructor(model){
        this.model = model
    }

    getMethod(req, res){
        return res.send({ msg: 'you got me'})
    }
}


module.exports = BaseController

