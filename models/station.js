'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here,liên kết các bảng lại với nhau.
    }
  }
  Station.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 30]// dùng để rằng buộc kí tự nhập vào từ 3-30 
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        checkLen(value) {
          if (value.length >= 5 && value.length <= 100)
            return true;
          else {
            throw new Error('độ dài bạn nhập phải từ 5->100 ký tự');
          }
        }
      }

    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
      isIn: [['HCM', 'HN', 'DN', 'HT', 'NA']],
    }
  }, {
    sequelize,
    modelName: 'Station',
  });
  return Station;
};