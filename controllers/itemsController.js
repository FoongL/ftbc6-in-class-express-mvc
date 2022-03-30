const BaseController = require('./baseController')

class ItemController extends BaseController {
    constructor(model){
        super(model)
    }

    myOwnGetMethod(req, res){
        return res.send({msg:'This is in the item controller'})
    }
}

module.exports = ItemController


