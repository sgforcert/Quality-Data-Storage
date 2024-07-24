const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Operator extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Operator.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, we define the primary key ourselves
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    operator_name: {
      type: DataTypes.STRING,
      isAlpha: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      isAlpha: true,
      allowNull: false,
    },
    registration_date: {
      type: DataTypes.STRING,
      allowNull: false,
      // 'isDate: true' - only allow date strings "2011-11-28"
      isDate: true, 
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // can be 5 or more character long
        len: [5],
      },
    },
  },
  {
    // source for hooks: bootcamp module13/activity17
    hooks: {
      // the beforeCreate hook to work with data before a new instance is created and added to database. It makes all letters of the user's email address to be lower case
      beforeCreate: async (newUserData) => {
        newUserData.email = await newUserData.email.toLowerCase();
        return newUserData;
      },

      // the beforeCreate hook to work with data before a new instance is created and added to database. It hashes the password 
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },

      // // the beforeUpdate hook to make all of the characters lower case in an updated email address, before updating the database.
      // beforeUpdate: async (updatedUserData) => {
      //   updatedUserData.email = await updatedUserData.email.toLowerCase();
      //   return updatedUserData;
      // },
    },

    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'operator'
  }
);

module.exports = Operator;
