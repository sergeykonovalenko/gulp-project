/**
 * Главный конфигурационный файл Gulp.
 * Организован в соответствии с принципами SOLID.
 *
 * 📌 Функции:
 * - Импортирует зависимости и задачи.
 * - Определяет пути из config.js.
 * - Управляет процессами сборки проекта.
 */

import gulp from 'gulp';

// Импорт конфигурации
import { paths } from './config.js';

// Импорт задач
import { clean } from './gulp/tasks/clean.js';
import { html } from './gulp/tasks/html.js';
import { fonts } from './gulp/tasks/fonts.js';
import { css, cssVendor } from './gulp/tasks/styles.js';
import { js, jsVendor } from './gulp/tasks/scripts.js';
import {
  img,
  convertToWebp,
  sprite,
} from './gulp/tasks/images.js';
import { server, reload } from './gulp/tasks/server.js';

// Функция установки переменной среды
const setEnv = (done) => {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  done();
};

// Функция для запуска WebP преобразований
export const webp = convertToWebp;

// Наблюдение за изменениями файлов
const watch = () => {
  gulp.watch(paths.watch.html, { usePolling: true }, gulp.series(html, reload));
  gulp.watch(paths.watch.fonts, { usePolling: true }, gulp.series(fonts, reload));
  gulp.watch(paths.watch.scss, { usePolling: true }, gulp.series(css));
  gulp.watch(paths.watch.cssVendor, { usePolling: true }, gulp.series(cssVendor));
  gulp.watch(paths.watch.js, { usePolling: true }, gulp.series(js, reload));
  gulp.watch(paths.watch.jsVendor, { usePolling: true }, gulp.series(jsVendor, reload));
  gulp.watch(paths.watch.img, { usePolling: true }, gulp.series(img, reload));
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
    img,
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
