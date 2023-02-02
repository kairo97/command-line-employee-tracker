const express = require('express');
const router = express.Router();
const path =  require('path');

const departmentRoutes = require('./departmentController');
router.use('/api/department', departmentRoutes)

// const roleRoutes = require('./roleController');
// router.use('/api/role', roleRoutes)

// const employeeRoutes = require('./employeeController');
// router.use('/api/employee', employeeRoutes)

module.exports = router;
