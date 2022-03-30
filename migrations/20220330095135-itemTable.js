'use strict';

//const { SequelizeScopeError } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users',{
      id:{
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        alowNull: false
      },
      name:{
        allowNull: false,
        type: Sequelize.STRING
      },
      userId:{
        allowNull: false,
        type: Sequelize.INTEGER,
        reference:{
          model: 'users',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    })

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');

  }
};
