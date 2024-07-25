const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for Machines
class MachineAccess extends Model {}

MachineAccess.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, we define the primary key ourselves
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    operator_id: {
        type: DataTypes.INTEGER,
        references: {
            // This references areconnected to the `Machine` model, which has machine `id`
            model: 'operator',
            key: 'id',
        },
    },
    machine_id: {
        type: DataTypes.INTEGER,
        references: {
            // This references areconnected to the `Machine` model, which has machine `id`
            model: 'machine',
            key: 'id',
        },
    },
    access_start_date: {
        type: DataTypes.STRING,
        isDate: true,
    },
    access_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'machineaccess'
  }
);

module.exports = MachineAccess;