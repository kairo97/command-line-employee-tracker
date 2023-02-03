

const express = require('express');
const  inquirer  = require('inquirer');
const db = require('./config/connection');
require('mysql2');
const controller = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const allRoutes = require('./controllers');
app.use(allRoutes)

function department(){
    db.query('USE company_db; SELECT * FROM department', (err, data) => {
       if(err){
        console.log(err)
       }else if (data){
        console.table(data);
       }
    })
}
function role(){
    db.query('SELECT * FROM role', (err, data) => {
        if (err){
            throw err;
        } else if (data){
            console.table(data);
        }
    })
}
function employee(){
    db.query('SELECT * FROM employee', (err, data) => {
        if (err){
            throw err;
        } else if (data){
          console.table(data);
        }
    })
}
function addDepartment(req, res){
    db.query('INSERT INTO department(name) VALUES(?)', [req.body.name], (err, data) => {
        if (err){
            throw err;
        }else if (data){
            res.send(data);
            console.log(data)
        }
    })
}


app.listen(PORT, () => {
    console.log(`Listeneing on port ${PORT}`)
});