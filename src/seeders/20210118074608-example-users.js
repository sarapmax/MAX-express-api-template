module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'users',
      [
        {
          first_name: 'John',
          last_name: 'Doe',
          email: 'johndoe@example.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: 'janedoe@example.com',
          first_name: 'Jane',
          last_name: 'Doe',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
}
