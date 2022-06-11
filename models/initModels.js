const { Bill } = require('./bill.Model');
const { User } = require('./user.Model');

const initModels = () => {
  // 1 User <----> M Bill
  User.hasMany(Bill, { foreignKey: 'user_id' });
  Bill.belongsTo(User);
};

module.exports = { initModels };
