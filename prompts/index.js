
const db = require("../config/connection");
const inquirer = require("inquirer");
const mysql = require("mysql2");
// importing functions from controller files for use in inquirer


function getDepartment(){

  db.query('SELECT * FROM department', (err,rows)=>{
      if(err){
          console.log(err);
      }else{
          console.table(rows)
           console.log("!")
           startPrompts();
      } 
  })
}
function addDepartment(){
inquirer.prompt([{ 
  type: "input",
  name: "departmentName",
  message: "what is the name of this department?",
  }]).then( function (answers) {

    db.query('INSERT INTO department(name)VALUES(?)',[answers.departmentName],(err,data)=>{
      if(err){
        console.log(err);
        
      }else{
        console.table(data);
        startPrompts();
      }
  })
} )
  
}
function getEmployee(){

  db.query('SELECT * FROM employee', (err,data)=>{
      if(err){
          console.log(err);
          
      }else{
          console.table(data);
          startPrompts()
      }
  })
}
function addEmployee(){
  db.query('SELECT * FROM department', (err,rows)=>{
    if(err){
        console.log(err);
    }else{
      inquirer.prompt([
        {
        type: "input",
        name: "firstName",
        message: "what is this employee's first name?"
      }, 
        {
        type: "input",
        name: "lastName",
        message: "what is this employee's last name?"
      }, 
        {
        type: "input",
        name: "managerId",
        message: "what is their manager's name?"
      }, 
        {
        type: "list",
        name: "roleId",
        message: "what is the name of their department?",
        choices: rows.map((dept)=> {
          dept.name
        }),
      }])
        
        
    } 
})


  db.query('INSERT INTO employee(first_name, last_name, roleId, managerId, )VALUES(?,?,?,?)', [first_name, last_name, roleId, managerId],(err,data)=>{
      if(err){
          console.log(err);
          
      }else{
          console.table(data);
          startPrompts()
      }
  })
  
}
function getRole(){
  db.query('SELECT * FROM role', (err, data) => {
    if (err){
      console.log(err)
    } else {
      console.table(data)
      startPrompts()
    }
  })
}

// starting inquirer
function startPrompts() {
  // return new Promise((resolve, reject) => {
  inquirer
    .prompt([
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
      console.log(answers);
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
    .catch((error) => {
      console.log(error);
      // reject(error);
    });
}

//   startPrompts().then(answers=>{
//     }
// })

module.exports = {startPrompts}
