'use strict';

/**
 * academy service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::academy.academy');
