'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Phong.belongsTo(models.KhachSan,{foreignKey:'khachSanId'});
      Phong.hasMany(models.DanhGia,{foreignKey:'phongId'});
      Phong.belongsTo(models.DatPhong,{foreignKey:'phongId'});
    }
  }
  Phong.init({
    tenPhong: DataTypes.STRING,
    phongNgu: DataTypes.INTEGER,
    phongTam: DataTypes.INTEGER,
    moTa: DataTypes.STRING,
    giaTien: DataTypes.INTEGER,
    mayGiat: DataTypes.BOOLEAN,
    banLa: DataTypes.BOOLEAN,
    tiVi: DataTypes.BOOLEAN,
    dieuHoa: DataTypes.BOOLEAN,
    wifi: DataTypes.BOOLEAN,
    bep: DataTypes.BOOLEAN,
    hoBoi: DataTypes.BOOLEAN,
    hinhAnh: DataTypes.STRING,
    danhGiaId: DataTypes.INTEGER,
    khachSanId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Phong',
  });
  return Phong;
};