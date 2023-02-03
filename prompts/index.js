// requirements for file
const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const mysql = require('mysql2');
const inquirer = require('inquirer');
// importing functions from controller files for use in inquirer
const { getDepartment, addDepartment, deleteDepartment} = require("../controllers/departmentController");
const { getRole, addRole, deleteRole} = require('../controllers/roleController');
const { getEmployee, addEmployee, deleteEmployee} = require('../controllers/employeeController');
// starting inquirer
inquirer.prompt([
    {
        type: "list",
        name: "start",
        message: "what would you like to do?",
        choices: ["view all departments", "view all roles",
         "view all employees", "add a department",
        "add a role", "add an employee", "update an employee role", "exit"]
    }
]).then(answers=>{
    if (answers === "view all departments"){
        getDepartment();
    } else if (answers === 'view all roles'){
        getRole();
    } else if (answers === "view all employees"){
        getEmployee();
    } else if (answers === "add a department"){
        addDepartment();
     } else if (answers === "add a role"){
        addRole();
     } else if (answers === "add an employee"){
        addEmployee();
     }
})

module.exports = prompts;