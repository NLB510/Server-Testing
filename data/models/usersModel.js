const db = require('../db.Config.js');

module.exports = {
  getUsers,
  addUser
}

function getUsers() {
  return db('users')

}


async function addUser(user) {
  const [id] = await db('users').insert(user, 'id');

  return db('users').where({id}).first();


}