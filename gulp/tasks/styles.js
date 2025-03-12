/**
 * Задача для обработки стилей (CSS/SCSS)
 */
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import minify from 'gulp-csso';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import { paths, sassOptions } from '../../config.js';

// Флаг для определения режима сборки (development/production)
const isProd = process.env.NODE_ENV === 'production';

// Обработка основных стилей
export const css = () => {
  return gulp.src(paths.src.scss)
    .pipe(plumber())
    .pipe(sass(sassOptions))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest(paths.build.css))
    .pipe(gulpif(isProd, minify()))
    .pipe(gulpif(isProd, rename({ suffix: '.min' })))
    .pipe(gulpif(isProd, gulp.dest(paths.build.css)));
};

// Копирование CSS-библиотек
export const cssVendor = () => {
  return gulp.src(paths.src.cssVendor)
    .pipe(gulp.dest(paths.build.css));
};
