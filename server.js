// const inquirer = require('inquirer');
const express = require('express');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const allRoutes = require('./controllers');
app.use(allRoutes)


app.listen(PORT, () => {
    console.log(`Listeneing on port ${PORT}`)
});