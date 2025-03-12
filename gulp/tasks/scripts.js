/**
 * Задача для обработки JavaScript файлов
 */
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import babel from 'gulp-babel';
import terser from 'gulp-terser';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import { paths } from '../../config.js';

// Флаг для определения режима сборки (development/production)
const isProd = process.env.NODE_ENV === 'production';

// Обработка основных скриптов
export const js = () => {
  return gulp.src(paths.src.js)
    .pipe(plumber())
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(gulp.dest(paths.build.js))
    .pipe(gulpif(isProd, terser()))
    .pipe(gulpif(isProd, rename({ suffix: '.min' })))
    .pipe(gulpif(isProd, gulp.dest(paths.build.js)));
};

// Копирование JS-библиотек
export const jsVendor = () => {
  return gulp.src(paths.src.jsVendor)
    .pipe(gulp.dest(paths.build.js));
};
