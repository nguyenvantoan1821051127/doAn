'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DanhGia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DanhGia.belongsTo(models.NguoiDung,{foreignKey:'nguoiDungId'});
      DanhGia.belongsTo(models.Phong,{foreignKey:'phongId'});
    }
  }
  DanhGia.init({
    ngayBinhLuan: DataTypes.DATE,
    noiDung: DataTypes.STRING,
    sao: DataTypes.INTEGER,
    nguoiDungId: DataTypes.INTEGER,
    phongId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DanhGia',
  });
  return DanhGia;
};