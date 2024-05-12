'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Phongs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenPhong: {
        type: Sequelize.STRING
      },
      phongNgu: {
        type: Sequelize.INTEGER
      },
      moTa: {
        type: Sequelize.STRING
      },
      giaTien: {
        type: Sequelize.INTEGER
      },
      mayGiat: {
        type: Sequelize.BOOLEAN
      },
      banLa: {
        type: Sequelize.BOOLEAN
      },
      tiVi: {
        type: Sequelize.BOOLEAN
      },
      dieuHoa: {
        type: Sequelize.BOOLEAN
      },
      wifi: {
        type: Sequelize.BOOLEAN
      },
      bep: {
        type: Sequelize.BOOLEAN
      },
      hoBoi: {
        type: Sequelize.BOOLEAN
      },
      hinhAnh: {
        type: Sequelize.STRING
      },
      khachSanId: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Phongs');
  }
};