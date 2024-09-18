'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Generate hashed passwords
    const hashedPassword1 = await bcrypt.hash('securePassword123', 10);
    const hashedPassword2 = await bcrypt.hash('strongPassword456', 10);
    const hashedPassword3 = await bcrypt.hash('passwordForCompany', 10);

    // Insert accounts
    return queryInterface.bulkInsert('accounts', [
      {
        account_id: 1,
        username: 'John Doe',
        email: 'johndoe@example.com',        // Add mock email
        password: hashedPassword1,           // Hashed password
      },
      {
        account_id: 2,
        username: 'Jane Doe',
        email: 'janedoe@example.com',        // Add mock email
        password: hashedPassword2,           // Hashed password
      },
      {
        account_id: 3,
        username: 'Company XYZ',
        email: 'xyz@example.com',            // Add mock email
        password: hashedPassword3,           // Hashed password
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('accounts', null, {});
  }
};
