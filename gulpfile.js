/**
 * Copyright © 2017 Vincent Besançon <besancon.vincent@gmail.com>
 *                  Windsurf Attitude <https://windsurf-attitude.com>
 * See LICENSE.
 **/

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    notify = require('gulp-notify'),
    gutil = require('gulp-util'),
    ftp = require('vinyl-ftp');

/**
 * Configuration
 **/

// FTP connection settings
var host = process.env.FTP_HOST;
var username = process.env.FTP_USER;
var password = process.env.FTP_PWD;
var port = 21;
var remoteFolder = '/www/themes/windsurf-attitude';

// Patterns
var localFilesGlob = [
    'assets/**',
    'config/**',
    'modules/**',
    'templates/**',
    'preview.png',
];

/**
 * Tasks
 **/

gulp.task('deploy', function() {

    var conn = ftp.create({
        host: host,
        user: username,
        password: password,
        parallel: 10,
        log: gutil.log
    });

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
    return gulp.src(localFilesGlob, {
            base: '.',
            buffer: false
        })
        .pipe(conn.newer(remoteFolder)) // only upload newer files
        .pipe(conn.dest(remoteFolder))
        .pipe(notify("Files have been send"));
});

gulp.task('watch', function() {
    gulp.watch(localFilesGlob, ['deploy'])
        .on('change', function(event) {
            notify('Changes detected! Uploading file "' + event.path + '", ' + event.type);
        });
});
