const Operator = require('./Operator.js');
const Machine = require('./Machine.js');
const Sample = require('./Sample.js');
const MachineAccess = require('./MachineAccess.js');


Machine.hasMany(Samples, {
    foreignKey: 'machine_id',
    onDelete: 'CASCADE',
});
  
Sample.belongsTo(Machine, {
    foreignKey: 'machine_id',
});
  
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

  module.exports = { Machine, Sample, Operator, MachineAccess };

