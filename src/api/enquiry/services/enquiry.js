'use strict';

// var knexConn = require('../config/knex');
// const knex = knexConn.knexDb();
/**
 * enquiry service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::enquiry.enquiry');
