'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NguoiDung extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      NguoiDung.hasMany(models.DatPhong,{foreignKey:'nguoiDungId'});
      NguoiDung.hasMany(models.DanhGia,{foreignKey:'danhGiaId'});
      // define association here
    }
  }
  NguoiDung.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    gender: DataTypes.BOOLEAN,
    role: DataTypes.STRING,
    password: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'NguoiDung',
  });
  return NguoiDung;
};