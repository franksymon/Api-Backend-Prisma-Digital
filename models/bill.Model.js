const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Bill = db.define('bill', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  value: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false,
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  observation: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
});

module.exports = { Bill };
