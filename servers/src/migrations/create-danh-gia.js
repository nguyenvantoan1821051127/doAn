'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DanhGias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ngayBinhLuan: {
        type: Sequelize.DATE
      },
      noiDung: {
        type: Sequelize.STRING
      },
      sao: {
        type: Sequelize.INTEGER
      },
      nguoiDungId: {
        type: Sequelize.INTEGER,
      },
      phongId: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DanhGias');
  }
};