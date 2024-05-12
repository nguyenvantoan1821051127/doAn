'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KhachSan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      KhachSan.belongsTo(models.ViTriTinhThanh,{foreignKey:'viTriId'});
      KhachSan.hasMany(models.Phong,{foreignKey:'khachSanId'});
    }
  }
  KhachSan.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    viTriId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'KhachSan',
  });
  return KhachSan;
};