/*
  Автор - Sergey Konovalenko.
  Email: sergeykonovalenko5550199@gmail.com
  Из Киева с любовью
*/

'use strict';

/* Подключение необходимых плагинов */
import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import minify from 'gulp-csso';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import svgstore from 'gulp-svgstore';
import posthtml from 'gulp-posthtml';
import include from 'posthtml-include';
import sync from 'browser-sync';

// Clean
export const clean = () => {
    return del('build');
}

// HTML
export const html = () => {
    return gulp.src('src/*.html')
        .pipe(posthtml([
            include()
        ]))
        .pipe(gulp.dest('build'));
}

// Fonts
export const fonts = () => {
    return gulp.src('src/fonts/*.{woff,woff2}')
        .pipe(gulp.dest('build/fonts'));
}

// CSS
export const css = () => {
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
        .pipe(sync.stream());
}

export const cssVendor = () => {
    return gulp.src('src/sass/vendor/*.css')
        .pipe(gulp.dest('build/css'))
        .pipe(sync.stream());
}

// Images
export const imgBase = () => {
    return gulp.src('src/img/base/*.*')
        .pipe(imagemin([
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('build/img/base'));
}

export const imgBg = () => {
    return gulp.src('src/img/bg/*.*')
        .pipe(imagemin([
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('build/img/bg'));
}

export const imgFavicon = () => {
    return gulp.src('src/img/favicon/*.*')
        .pipe(imagemin([
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('build/img/favicon'));
}

export const imgOg = () => {
    return gulp.src('src/img/og/*.*')
        .pipe(imagemin([
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('build/img/og'));
}

// WEBP
export const png = () => {
    return gulp.src('src/img/**/*.png')
        .pipe(webp({
            lossless: true
        }))
        .pipe(gulp.dest('build/img'));
}

export const jpg = () => {
    return gulp.src('src/img/**/*.jpg')
        .pipe(webp({
            quality: 85
        }))
        .pipe(gulp.dest('build/img'));
}

export const webp2 = () => {
    gulp.series(png, jpg);
}

// SVG-sprite
export const sprite = () => {
    return gulp.src('src/img/icon-*.svg')
        .pipe(rename('sprite.svg'))
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(gulp.dest('build/img'));
}

// JS
export const js = () => {
    return gulp.src('src/js/*.js')
        .pipe(babel({
            // presets: ['@babel/env']
            presets: ['@babel/preset-env']
        }))
        .pipe(plumber())
        .pipe(gulp.dest('build/js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('build/js'));
}

export const jsVendor = () => {
    return gulp.src('src/js/vendor/*.js')
        .pipe(gulp.dest('build/js'));
}

// Server
export const server = () => {
    sync.init({
        server: 'build/'
    });
}

export const refresh = (done) => {
    sync.reload();
    done();
}

// Watch
export const watch = () => {
    gulp.watch('src/*.html', {usePolling: true}, gulp.series(html, refresh));
    gulp.watch('src/fonts/*.{woff,woff2}', {usePolling: true}, gulp.series(fonts, refresh));
    gulp.watch('src/sass/modules/*.{scss,sass}', {usePolling: true}, gulp.series(css));
    gulp.watch('src/sass/spec/*.scss', {usePolling: true}, gulp.series(css));
    gulp.watch('src/sass/vendor/*.css', {usePolling: true}, gulp.series(cssVendor));
    gulp.watch('src/sass/*.{scss,sass}', {usePolling: true}, gulp.series(css));
    gulp.watch('src/img/base/*.*', {usePolling: true}, gulp.series(imgBase, refresh));
    gulp.watch('src/img/bg/*.*', {usePolling: true}, gulp.series(imgBg, refresh));
    gulp.watch('src/img/favicon/*.*', {usePolling: true}, gulp.series(imgFavicon, refresh));
    gulp.watch('src/img/og/*.*', {usePolling: true}, gulp.series(imgOg, refresh));
    gulp.watch('src/js/*.js', {usePolling: true}, gulp.series(js, refresh));
    gulp.watch('src/js/vendor/*.js', {usePolling: true}, gulp.series(jsVendor, refresh));
}

// Build
// export const build = () => {
//     gulp.series(
//         clean,
//         html,
//         fonts,
//         css,
//         cssVendor,
//         imgBase,
//         imgBg,
//         imgFavicon,
//         imgOg,
//         js,
//         jsVendor,
//     );
// }

// Default
export default gulp.series(
    gulp.parallel(
        clean,
        html,
        fonts,
        css,
        cssVendor,
        imgBase,
        imgBg,
        imgFavicon,
        imgOg,
        js,
        jsVendor,
    ),
    gulp.parallel(
        watch,
        server,
    ),
);
