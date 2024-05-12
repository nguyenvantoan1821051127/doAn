'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DatPhongs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ngayDen: {
        type: Sequelize.DATE
      },
      ngayDi: {
        type: Sequelize.DATE
      },
      soLuongKhach: {
        type: Sequelize.INTEGER
      },
      phongId: {
        type: Sequelize.INTEGER,
      },
      nguoiDungId: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DatPhongs');
  }
};