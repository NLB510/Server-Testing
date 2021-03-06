const db = require('../db.Config');

const Users = require('./usersModel');



describe('Users Model', () => {
  
  describe('getUsers()', () => {
    afterEach(async () => {
      await db('users').truncate();
    })
    it('should retrieve an empty array of users from the db', async () => {
      const users = await Users.getUsers();

      expect(users).toHaveLength(0);

    })

  })


  describe('addUser', () => {
    afterEach(async () => {
      await db('users').truncate();
    })

    it('should insert the provided user into the database', async () => {
      const user = await Users.addUser({name: 'Nate'})

      expect(user.name).toBe('Nate');

    })

    it('should add multiple users', async () => {
      await Users.addUser({name: "Nate"})
      await Users.addUser({name: "Mike"})

      const users = await db('users');
      expect(users).toHaveLength(2)

    })


  })


  describe('removeUser()', async () => {
    it('should delete a user from the db', async () => {
      await Users.addUser({ name: "Nate" })
      await Users.addUser({ name: "Mike" })

      await Users.removeUser(1)
      const users = await db('users');
      expect(users).toHaveLength(1)

    })

  })



})