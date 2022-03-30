const express = require('express');
const app = express()
app.use(express.json());
/**
 * What does this app do?
 * 
 * Basic Login and registration
 * Keep track of somebodies belongings
 * 
 * Basic API Needs:
 * Login user
 * signup for user
 * 
 * Add belonging to a user
 * 
 * 2 routers:
 * Users Routers --> user controller
 * Items Routers --> item Controller
 */

//import models
const db = require('./models/index')

// import controllers
const UserController = require('./controllers/usersController')
const ItemController = require('./controllers/itemsController')

// initisalize controller
const userController = new UserController(db.Users)
const itemController = new ItemController(db.Items)

// import Routers
const userRouter = require('./routes/userRouter');
const itemRouter = require('./routes/itemsRouter')



app.use('/users', userRouter(userController))
app.use('/items', itemRouter(itemController))


const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`)
})