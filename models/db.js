const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'newuser',
    password: 'newpassword',
    database: 'yogyakarta_pariwisata'
});

module.exports = pool;
