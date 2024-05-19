'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DanhGias', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DanhGias');
  }
};