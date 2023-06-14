// create database escolaerp;


const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: '172.17.0.1',
  database: 'escolaerp',
  password: 'postdba',
  port: 5433,
})

module.exports = {
    query: (text, params) => pool.query(text, params),
  };