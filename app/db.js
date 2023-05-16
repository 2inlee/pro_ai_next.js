import mysql from 'mysql2';

// Create a connection pool
const Usertable = mysql.createPool({
  host: 'localhost',
  user: 'inlee',
  password: '2580',
  database: 'pro_ai',
  connectionLimit: 10, // Adjust the limit based on your needs
});

export default Usertable;