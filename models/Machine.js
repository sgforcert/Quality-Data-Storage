const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for Machines
class Machine extends Model {}

Machine.init(
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
        isAlpha: true,
        allowNull: false,
        unique: true,
        // must be 1 character long
        validate: {
          len: [1],
        },
    },
    registration_date: {
        type: DataTypes.STRING,
        allowNull: false,
        // 'isDate: true' - only allow date strings "2011-11-28"
        isDate: true, 
    },
  },
  {
    hooks: {
        // the beforeCreate hook works with data before a new Machine instance is created
        beforeCreate: async (newData) => {
          // machine_name is taken and machine_name letter is maken to be upper case before to be added to the database.
          newData.machine_name = await newData.machine_name.toUpperCase();
          return newData;
        },
      },

    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'machine'
  }
);

module.exports = Machine;
