'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ViTriTinhThanhs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quocGia: {
        type: Sequelize.STRING
      },
      tenTinhThanh: {
        type: Sequelize.STRING
      },
      diaChi: {
        type: Sequelize.STRING
      },
      hinhAnh: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ViTriTinhThanhs');
  }
};