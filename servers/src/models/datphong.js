'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DatPhong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DatPhong.belongsTo(models.NguoiDung,{foreignKey:'nguoiDungId'});
      DatPhong.belongsTo(models.Phong,{foreignKey:'phongId'});
    }
  }
  DatPhong.init({
    ngayDen: DataTypes.DATE,
    ngayDi: DataTypes.DATE,
    soLuongKhach: DataTypes.INTEGER,
    phongId: DataTypes.INTEGER,
    nguoiDungId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'DatPhong',
  });
  return DatPhong;
};