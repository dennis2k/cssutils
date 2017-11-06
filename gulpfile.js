'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require("gulp-sass-glob");
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('default', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('util.css'))
        .pipe(gulp.dest('./'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./'));
});

gulp.task("watch",() => {
    gulp.watch("./sass/*.scss", ['default']);
})