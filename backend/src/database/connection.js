const Sequelize = require('sequelize');
const ConfigDB = require('../config/database');

const connection = new Sequelize(ConfigDB);


// const Company = require('../models/Company');
const Product = require('../models/Product');
const Label = require('../models/Label');

// Models Init


// Company.init(connection);
Product.init(connection);
Label.init(connection);

// Associate

// Company.associate(connection.models);
Product.associate(connection.models);
Label.associate(connection.models);

module.exports = connection;
