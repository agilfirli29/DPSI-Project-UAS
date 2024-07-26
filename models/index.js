const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');
const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, DataTypes);
db.Materi = require('./materi')(sequelize, DataTypes);
db.Evaluasi = require('./evaluasi')(sequelize, DataTypes);

module.exports = db;
