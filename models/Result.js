const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for Machines
class Result extends Model { }

Result.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, we define the primary key ourselves
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    machine_name: {
      type: DataTypes.STRING,
    },

    sample_name: {
      type: DataTypes.STRING,
    },

    sample_day: {
      type: DataTypes.DATE,
      allowNull: true,
      // 'isDate: true' - only allow date strings "2011-11-28"
      isDate: true,
    },
    sample_notes: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
    operator_name: {
      type: DataTypes.STRING,
    },
    sample_result: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {

    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'result'
  }
);

module.exports = Result;
