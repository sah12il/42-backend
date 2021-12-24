'use strict';

/**
 * cms service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cms.cms');
