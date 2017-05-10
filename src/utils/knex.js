const config = require('../../knexConfig');

module.exports = require('knex')(config['config']);
