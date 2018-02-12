'use strict';
const settings = require('config');

const manifest = {
    // $meta: 'This file defines the plot device.',
    server: {
        debug: {
            request: ['received']
        },
        routes: {
            security: true
        },
        port: settings.port,
        host: settings.host,
    },
    register: {
        plugins: [
            {
                plugin: require('@now-ims/hapi-now-auth')
            },
            {
                plugin: './server/api/auth'
            },
            {
                plugin: './server/api/users'
            },
            //set up good to log every kind of event. Change according to your needs.
            /*
            {
                plugin: require('good'),
                name: 'good',
                options: {
                    reporters: {
                        reporter: require('good-console'),
                        args: [{log: '*', request: '*', ops: '*', error: '*'}]
                    }
                }
            },
            {
                plugin: require('hapi-bodyparser'),
                options: {
                    json: true,
                    urlencoded: {
                        extended: true
                    }
                }
            }
            */
        ]
    }
}

module.exports = manifest;