'use strict';

module.exports = {
    routes: [
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/enquiry/:slug',
            handler: 'enquiry.findBySlug',
        }
    ]
}
