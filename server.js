const { app } = require('./app');

// Models
const { initModels } = require('./models/initModels');

const { db } = require('./utils/database');

// Authenticate database credentials
db.authenticate()
  .then(() => console.log('Databese authenticate'))
  .catch(err => console.log(err));

// Establish models relations
initModels();

// Sync sequelize models
db.sync()
  .then(() => console.log('Databese synced'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
