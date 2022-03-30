const BaseController = require('./baseController')

class UserController extends BaseController {
    constructor(model){
        super(model)
    }

    async signup(req,res){
        const { name, password } = req.body
        await this.model.create({name, password})
        res.send({msg:`${name} has been created into the db`})
    }


    myOwnGetMethod(req, res){
        return res.send({msg:'This is in the uder controller'})
    }
}

module.exports = UserController


