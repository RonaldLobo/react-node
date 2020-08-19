'use strict';

const logger = { 
    error: function(message) {
        console.error(message);
    },
    info: function(message) {
        console.log(message);
    },
    debug: function(message) {
        console.log(message);
    }
};

module.exports = logger;
