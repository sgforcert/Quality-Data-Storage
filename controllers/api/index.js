const router = require('express').Router();
const userRoutes = require('./userRoutes');

const auditRoutes = require('./auditroutes.js');

router.use('/users', userRoutes);
router.use('/audit', auditRoutes);
module.exports = router;
