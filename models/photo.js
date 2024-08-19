'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Photo.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique:true,
    },
    uuid: {
      defaultValue:DataTypes.UUIDV4,
      type:DataTypes.UUID,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    relatedTo: {
      type: DataTypes.STRING, 
      allowNull: true,
    },
    category: {
      type: DataTypes.ENUM( 'Men', 'Women', 'Leaders', 'Group'),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};