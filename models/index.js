// const User = require('./User');
const Machine = require('./Machine.js');
const Sample = require('./Sample.js');

Machine.hasMany(Samples, {
    foreignKey: 'machine_id',
    onDelete: 'CASCADE',
  });
  
  Sample.belongsTo(Machine, {
    foreignKey: 'machine_id',
  });
  
 
  module.exports = { Machine, Sample };
// module.exports = { User };
