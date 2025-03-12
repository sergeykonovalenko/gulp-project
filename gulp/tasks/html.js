/**
 * Задача для обработки HTML файлов
 */
import gulp from 'gulp';
import posthtml from 'gulp-posthtml';
import include from 'posthtml-include';
import { paths } from '../../config.js';

export const html = () => {
  return gulp.src(paths.src.html)
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest(paths.build.html));
};
