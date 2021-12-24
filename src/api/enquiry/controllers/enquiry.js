'use strict';

/**
 *  enquiry controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::enquiry.enquiry', () => ({

    //create findBySlug
    async findBySlug(ctx) {

        const slug = ctx.params.slug;
        const enquiry = await strapi
            .service('api::enquiry.enquiry')
            .findBySlug(slug);
            console.log(enquiry)
        ctx.send(enquiry);

    }
}));
