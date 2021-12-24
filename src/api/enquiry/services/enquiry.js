'use strict';

// var knexConn = require('../config/knex');
// const knex = knexConn.knexDb();
/**
 * enquiry service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::enquiry.enquiry', {

    findBySlug: (slug) => {
        const knex = strapi.db.connection;
        return new Promise(async (resolve, reject) => {
            try {
                const enquiry = await knex('enquiries')
                    .where({ slug: slug })
                resolve(enquiry)
               
            } catch (err) {
                reject(err);
            }
        })
    }

});
