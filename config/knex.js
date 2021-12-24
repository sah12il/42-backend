module.exports.knexDb = function () {
    const knex_options = {
        client: 'mysql',
        connection: {
            host: process.env.DATABASE_HOST || '127.0.0.1',
            user: process.env.DATABASE_USERNAME || 'root',
            password: process.env.DATABASE_PASSWORD || 'Root@123',
            database: process.env.DATABASE_NAME || '42_estate',
        }
    }
    const knex = require('knex')(knex_options);
    return knex
}
