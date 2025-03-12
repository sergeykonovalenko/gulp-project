/*
  Автор - Sergey Konovalenko.
  Email: sergeykonovalenko5550199@gmail.com
  Из Киева с любовью
*/

/**
 * Главный конфигурационный файл Gulp
 * Реорганизован согласно принципам SOLID
 */

import gulp from 'gulp';
import browserSync from 'browser-sync';

// Импорт конфигурации
import { paths } from './config.js';

// Импорт задач
import { clean } from './gulp/tasks/clean.js';
import { html } from './gulp/tasks/html.js';
import { fonts } from './gulp/tasks/fonts.js';
import { css, cssVendor } from './gulp/tasks/styles.js';
import { js, jsVendor } from './gulp/tasks/scripts.js';
import { 
  imgBase, 
  imgBg, 
  imgFavicon, 
  imgOg, 
  pngToWebp, 
  jpgToWebp, 
  sprite 
} from './gulp/tasks/images.js';
import { server, reload } from './gulp/tasks/server.js';

// Функция установки переменной среды
const setEnv = (done) => {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  done();
};

// Функция для запуска WebP преобразований
export const webp = gulp.parallel(pngToWebp, jpgToWebp);

// Наблюдение за изменениями файлов
const watch = () => {
  gulp.watch(paths.watch.html, { usePolling: true }, gulp.series(html, reload));
  gulp.watch(paths.watch.fonts, { usePolling: true }, gulp.series(fonts, reload));
  gulp.watch(paths.watch.scss, { usePolling: true }, gulp.series(css));
  gulp.watch(paths.watch.cssVendor, { usePolling: true }, gulp.series(cssVendor));
  gulp.watch(paths.watch.js, { usePolling: true }, gulp.series(js, reload));
  gulp.watch(paths.watch.jsVendor, { usePolling: true }, gulp.series(jsVendor, reload));
  gulp.watch(paths.watch.imgBase, { usePolling: true }, gulp.series(imgBase, reload));
  gulp.watch(paths.watch.imgBg, { usePolling: true }, gulp.series(imgBg, reload));
  gulp.watch(paths.watch.imgFavicon, { usePolling: true }, gulp.series(imgFavicon, reload));
  gulp.watch(paths.watch.imgOg, { usePolling: true }, gulp.series(imgOg, reload));
};

// Сборка проекта
export const build = gulp.series(
  setEnv,
  clean,
  gulp.parallel(
    html,
    fonts,
    css,
    cssVendor,
    js,
    jsVendor,
    imgBase,
    imgBg,
    imgFavicon,
    imgOg,
    sprite
  )
);

// Режим разработки
export default gulp.series(
  setEnv,
  build,
  gulp.parallel(
    server,
    watch
  )
);
