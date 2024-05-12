'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ViTriTinhThanh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ViTriTinhThanh.hasMany(models.KhachSan,{foreignKey:'viTriId'});
    }
  }
  ViTriTinhThanh.init({
    quocGia: DataTypes.STRING,
    tenTinhThanh: DataTypes.STRING,
    diaChi: DataTypes.STRING,
    hinhAnh: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ViTriTinhThanh',
  });
  return ViTriTinhThanh;
};