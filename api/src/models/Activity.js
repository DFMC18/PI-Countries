const DataTypes = require("sequelize");
//execute the funtion and pass in the connection
// sequelize is the connection
module.exports = (sequelize) => {
  //define the model

  sequelize.define("activity", {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dificulty: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    season: {
      type: DataTypes.ENUM("Winter", "Spring", "Summer", "Autumn"),
      allowNull: true,
    },
  });
};
