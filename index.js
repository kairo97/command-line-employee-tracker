const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2')
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'HotSauce1997!',
        database: 'comapny_db'
    },
    console.log('connected to company_db.')
);