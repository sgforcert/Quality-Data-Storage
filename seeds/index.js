const sequelize = require('../config/connection');
const {Machine, MachineAccess, Operator, Sample} = require('../models');

const machineData = require('./machine-seeds.json');
const machineAccessData = require('./machineAccess-seeds.json');
const operatorData = require('./operator-seeds.json');
const sampleData = require('./sample-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Machine.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Operator.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();