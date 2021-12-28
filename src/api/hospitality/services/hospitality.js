'use strict';

/**
 * hospitality service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hospitality.hospitality');
