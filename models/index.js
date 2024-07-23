const Operator = require('./Operator.js');
const Machine = require('./Machine.js');
const Sample = require('./Sample.js');
const MachineAccess = require('./MachineAccess.js');

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

// connections for audit_july012024-Machine-Operator-Sample tables
Machine.hasMany(audit_july012024, {
  foreignKey: 'machine_id',
});

audit_july012024.belongsTo(Machine, {
  foreignKey: 'machine_id',
});

Operator.hasMany(audit_july012024, {
  foreignKey: 'machine_id',
});

audit_july012024.belongsTo(Operator, {
  foreignKey: 'machine_id',
});

Sample.hasMany(audit_july012024, {
  foreignKey: 'machine_id',
});

audit_july012024.belongsTo(Sample, {
  foreignKey: 'machine_id',
});

// connections for audit_july022024-Machine-Operator-Sample tables



// connections for audit_july032024-Machine-Operator-Sample tables



// connections for audit_july042024-Machine-Operator-Sample tables



  module.exports = { Machine, Sample, Operator, MachineAccess };

