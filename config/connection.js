const mysql = require("mysql2");
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'HotSauce1997!',
        database: 'company_db'
    },
    console.log('connected to company_db.')
);

module.exports = db;