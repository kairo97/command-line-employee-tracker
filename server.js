

// // requirements for file
// const table = require('console.table');
// const db = require('./config/connection');
const prompts = require('./prompts');
// require('mysql2');

// middleware


// const PORT = process.env.PORT || 3000;

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());
// // using controller files for all routes
// const allRoutes = require('./controllers');
// app.use(allRoutes)
// // listening when node is started
// app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`)
// });
prompts.startPrompts()