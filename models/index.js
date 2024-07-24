const Operator = require('./Operator.js');
const Machine = require('./Machine.js');
const Sample = require('./Sample.js');
const MachineAccess = require('./MachineAccess.js');
const result = require('./result.js');

// connections for Sample-Machine tables 
Machine.hasMany(Sample, {
    foreignKey: 'machine_id',
    onDelete: 'CASCADE',
});
  
Sample.belongsTo(Machine, {
    foreignKey: 'machine_id',
});
 

//connections for MachineAccess-Operator-Machine tables 
Operator.hasMany(MachineAccess, {
    foreignKey: 'operator_id',
    onDelete: 'CASCADE',
});

MachineAccess.belongsTo(Operator, {
  foreignKey: 'operator_id',
});

Machine.hasMany(MachineAccess, {
  foreignKey: 'machine_id',
  onDelete: 'CASCADE',
});

MachineAccess.belongsTo(Machine, {
  foreignKey: 'machine_id',
});

// connections for result-Machine-Operator-Sample tables
Machine.hasMany(result, {
  foreignKey: 'machine_id',
});

result.belongsTo(Machine, {
  foreignKey: 'machine_id',
});

Operator.hasMany(result, {
  foreignKey: 'machine_id',
});

result.belongsTo(Operator, {
  foreignKey: 'machine_id',
});

Sample.hasMany(result, {
  foreignKey: 'machine_id',
});

result.belongsTo(Sample, {
  foreignKey: 'machine_id',
});

  module.exports = { Machine, Sample, Operator, MachineAccess, result };

