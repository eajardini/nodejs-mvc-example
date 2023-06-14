const db = require('../database/queries')

const getUsers = async () => {
    return (await db.query('SELECT * FROM users ORDER BY id ASC')).rows
  }

  module.exports = {
    getUsers,
  }