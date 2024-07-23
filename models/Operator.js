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
        unique: true,
        // must be 30 character long
        validate: {
          len: [30],
        },
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
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    // freezeTableName: true,
    modelName: 'operator'
  }
);

module.exports = Operator;
