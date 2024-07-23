const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for Machines
class Sample extends Model {}

Sample.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, we define the primary key ourselves
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    sample_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    registration_date: {
        type: DataTypes.STRING,
        isDate: true,
    },
    // This column will contain a foreign key: the `id` of the `Machine` that owns this Sample
    machine_id: {
        type: DataTypes.INTEGER,
        references: {
            // This references areconnected to the `Machine` model, which has machine `id`
            model: 'machine',
            key: 'id',
        },
    },
  },
  {
    hooks: {
        // the beforeCreate hook works with data before a new Machine instance is created
        beforeCreate: async (newData) => {
          // machine_name is taken and machine_name letter is maken to be upper case before to be added to the database.
          newData.sample_name = await newData.sample_name.toLowerCase();
          return newData;
        },
      },
    sequelize,
    timestamps: false,
    underscored: true,
    // freezeTableName: true,
    modelName: 'sample'
  }
);

module.exports = Sample;
