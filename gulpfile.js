'use strict';

var gulp = require('gulp'),
    stubby = require('./stubby.js');

var paths = {
    stubs: 'stubs/*.{json,js}'
};

gulp.task('stubby', function (cb) {
    var options = {
        callback: function (server, options) {
            server.get(1, function (err, endpoint) {
                if (err)
                    console.log(err);
            });
        },
        stubs: 8000,
        tls: 8443,
        admin: 8010,
        files: [
            paths.stubs
        ]
    };
    stubby(options, cb);
});