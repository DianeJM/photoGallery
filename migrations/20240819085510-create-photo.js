'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Photos', {
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Photos');
  }
};