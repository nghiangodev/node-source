// get the client
import mysql from 'mysql2'
import dotenv from 'dotenv/config'

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    database: process.env.DB_DATABASE || 'nodejsbasic'
});

export default connection;
