const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    //mySQL username
    user: 'root',
    //mySQL password
    password: 'TealSpenser68!!',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_database database.`)
);
//starting the server
app.listen(PORT, () => {

//create employee
app.get('database.js', (req, res) => {
const sql = `
SELECT * FROM employee;
`

  db.query(sql,(err, rows) => {
    if (err) {
    res.status(400).json(err);
}
    res.json(rows);
});
  
if (err) console.log(err);
  console.log(`Server running on port ${PORT}`);
})
});
