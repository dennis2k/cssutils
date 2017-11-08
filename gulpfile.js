'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require("gulp-sass-glob");
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var gzip = require("gulp-gzip");

gulp.task('all', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('util.css'))
        .pipe(gulp.dest('./dist'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'))
        .pipe(gzip())
        .pipe(gulp.dest('./dist'));
});

gulp.task('no-media', function () {
    return gulp.src(['./sass/*.scss', "!./sass/render-media.scss"])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('util.nomedia.css'))
        .pipe(gulp.dest('./dist'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'))
        .pipe(gzip())
        .pipe(gulp.dest('./dist'));
});

gulp.task("default",["all", "no-media"]);

gulp.task("watch",() => {
    gulp.watch("./sass/*.scss", ['default']);
})