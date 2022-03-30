const sequelizePackage = require('sequelize')
const allConfig = require('../config/config')

const initUsersModel = require('./usersModel')
const initItemsModel = require('./itemsModel')

const { Sequelize } = sequelizePackage
const env = 'development'
const config = allConfig[env]

const db= {}

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
)

db.Users = initUsersModel(sequelize, Sequelize.DataTypes);
db.Items = initItemsModel(sequelize, Sequelize.DataTypes);

db.Users.hasMany(db.Items)
db.Items.belongsTo(db.Users)

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db