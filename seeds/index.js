const sequelize = require('../config/connection');
const {Machine, Operator, MachineAccess, Sample } = require('../models');

const machineData = require('./machine-seeds.json');
const machineAccessData = require('./machineAccess-seeds.json');
const operatorData = require('./operator-seeds.json');
const sampleData = require('./sample-seeds.json');

const seedDatabase = async () => {

  await sequelize.sync({ force: true });

  await Machine.bulkCreate(machineData, {
    individualHooks: true,
    returning: true,
  });

  await Operator.bulkCreate(operatorData , {
    individualHooks: true,
    returning: true,
  });

  await MachineAccess.bulkCreate(machineAccessData , {
    individualHooks: true,
    returning: true,
  });

  await Sample.bulkCreate(sampleData , {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);

};

seedDatabase();
