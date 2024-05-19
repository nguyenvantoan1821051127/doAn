'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DatPhongs', {
      id: {
        allowNull: false,
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
    await queryInterface.dropTable('DatPhongs');
  }
};