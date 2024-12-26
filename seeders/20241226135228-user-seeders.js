"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          profession: "Admin",
          role: "admin",
          email: "fadilaccnt@gmail.com",
          password: await bcrypt.hash("rahasia@1234", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "User Satu",
          profession: "Mahasiswa",
          role: "student",
          email: "test@mail.com",
          password: await bcrypt.hash("rahasiaku@123", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
