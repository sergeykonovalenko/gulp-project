/*
  Автор - Sergey Konovalenko.
  Email: sergeykonovalenko5550199@gmail.com
  Из Киева с любовью
*/

'use strict';

/* Подключение необходимых плагинов */
let gulp = require('gulp'),
    del = require('del'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    minify = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    svgstore = require('gulp-svgstore'),
    posthtml = require('gulp-posthtml'),
    include = require('posthtml-include'),
    server = require('browser-sync').create();

/* Clean */
gulp.task('clean', function () {
    return del('build');
});

/* HTML */
gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(posthtml([
            include()
        ]))
        .pipe(gulp.dest('build'));
});

/* Fonts */
gulp.task('fonts', function () {
    return gulp.src('src/fonts/*.{woff,woff2}')
        .pipe(gulp.dest('build/fonts'));
});

/* CSS */
gulp.task('css', function () {
    return gulp.src('src/sass/style.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'expanded',
            indentWidth: 4
        }))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('build/css'))
        .pipe(server.stream())
        .pipe(minify())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(server.stream());
});

gulp.task('css-vendor', function () {
    return gulp.src('src/sass/vendor/*.css')
        .pipe(gulp.dest('build/css'))
        .pipe(server.stream());
});

/* Images */
gulp.task('img', function () {
    return gulp.src('src/img/**/*.*')
        .pipe(imagemin([
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('build/img'));
});

/* WEBP */
gulp.task('png', function () {
    return gulp.src('src/img/**/*.png')
        .pipe(webp({
            lossless: true
        }))
        .pipe(gulp.dest('build/img'));
});

gulp.task('jpg', function () {
    return gulp.src('src/img/**/*.jpg')
        .pipe(webp({
            quality: 85
        }))
        .pipe(gulp.dest('build/img'));
});

gulp.task('webp', gulp.series('png', 'jpg'));

/* SVG-sprite */
gulp.task('sprite', function () {
    return gulp.src('src/img/icon-*.svg')
        .pipe(rename('sprite.svg'))
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(gulp.dest('build/img'));
});

/* JS */
gulp.task('js', function () {
    return gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(gulp.dest('build/js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('build/js'));
});

gulp.task('js-vendor', function () {
    return gulp.src('src/js/vendor/*.js')
        .pipe(gulp.dest('build/js'));
});

/* BrowserSync */
gulp.task('serve', function () {
    server.init({
        server: 'build/'
    });

    gulp.watch('src/*.html', gulp.series('html', 'refresh'));
    gulp.watch('src/fonts/*.{woff,woff2}', gulp.series('fonts', 'refresh'));
    gulp.watch('src/sass/**/*.{scss,sass}', gulp.series('css'));
    gulp.watch('src/sass/vendor/*.css', gulp.series('css-vendor'));
    gulp.watch('src/img/**/*.*', gulp.series('img', 'refresh'));
    gulp.watch('src/js/*.js', gulp.series('js', 'refresh'));
    gulp.watch('src/js/vendor/*.js', gulp.series('js-vendor', 'refresh'));
});

gulp.task('refresh', function (done) {
    server.reload();
    done();
});

/* Build */
gulp.task('build', gulp.series(
    'clean',
    'html',
    'fonts',
    'css',
    'css-vendor',
    'img',
    'js',
    'js-vendor'
));
