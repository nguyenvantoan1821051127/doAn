'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('KhachSans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenKhachSan: {
        type: Sequelize.STRING
      },
      giaMoiDem: {
        type: Sequelize.INTEGER
      },
      moTa: {
        type: Sequelize.STRING
      },
      hinhAnh: {
        type: Sequelize.STRING
      },
      viTriId: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('KhachSans');
  }
};