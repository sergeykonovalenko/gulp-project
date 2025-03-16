/**
 * Задача для копирования шрифтов
 */
import gulp from 'gulp';
import { paths } from '../../config.js';

export const fonts = () => {
  return gulp.src(paths.src.fonts).pipe(gulp.dest(paths.build.fonts));
};
