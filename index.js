const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2')
const PORT = process.env.PORT || 3000;
const app = express();