const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for Machines
class audit_july012024 extends Model {}

audit_july012024.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, we define the primary key ourselves
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      machine_id: {
        type: DataTypes.INTEGER,
        references: {
            // This references areconnected to the `Machine` model, which has machine `id`
            model: 'machine',
            key: 'id',
        },
    },
    sample_id: {
        type: DataTypes.INTEGER,
        references: {
            // This references areconnected to the `Machine` model, which has machine `id`
            model: 'sample',
            key: 'id',
        },
    },
    sample_time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sample_notes: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [100],
          },
    },
    operater_id: {
        type: DataTypes.INTEGER,
        references: {
            // This references areconnected to the `Machine` model, which has machine `id`
            model: 'sample',
            key: 'id',
        },
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
    // freezeTableName: true,
    modelName: 'audit_july012024'
  }
);

module.exports = audit_july012024;