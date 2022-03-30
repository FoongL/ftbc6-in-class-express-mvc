const initUsersModel=(sequelize, DataTypes)=> {
    return sequelize.define(
      'users',
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
        password: {
          allowNull: false,
          type: DataTypes.STRING,
        }
      }
    );
  }

  module.exports = initUsersModel