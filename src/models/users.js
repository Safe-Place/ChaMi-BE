const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("Users", {
  id_pegawai: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  posisi: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  divisi: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = User;
