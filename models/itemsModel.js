const initItemsModel=(sequelize, DataTypes)=> {
    return sequelize.define(
      'items',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        userId:{
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
      }
    );
  }

  module.exports = initItemsModel