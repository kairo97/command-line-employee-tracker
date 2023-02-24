// requirements for file
const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const mysql = require('mysql2');
const inquirer = require('inquirer');
// importing functions from controller files for use in inquirer
const { getDepartment, addDepartment} = require("../controllers/departmentController");
const { getRole, addRole} = require('../controllers/roleController');
const { getEmployee, addEmployee} = require('../controllers/employeeController');
// starting inquirer
function startPrompts() {
    return new Promise((resolve, reject) => {
      inquirer.prompt([
        {
          type: "list",
          name: "start",
          message: "what would you like to do?",
          choices: [
            "view all departments",
            "view all roles",
            "view all employees",
            "add a department",
            "add a role",
            "add an employee",
            "update an employee role",
            "exit",
          ],
        },
      ])
        .then((answers) => {
          resolve(answers.start);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  startPrompts().then(answers=>{
    if (answers.start === "view all departments") {
        getDepartment();
    } else if (answers.start === "view all roles") {
        getRole();
    } else if (answers.start === "view all employees") {
        getEmployee();
    } else if (answers.start === "add a department") {
        addDepartment();
    } else if (answers.start === "add a role") {
        addRole();
    } else if (answers.start === "add an employee") {
        addEmployee();
    } else if (answers.start === "exit") {
        console.log("Exiting program...");
        process.exit();
    }
})

  startPrompts();
 