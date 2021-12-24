'use strict';

/**
 *  cms controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cms.cms');
