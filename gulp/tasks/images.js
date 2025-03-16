/**
 * Задача для обработки изображений
 */
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import svgstore from 'gulp-svgstore';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import { paths, webpOptions, svgSpriteOptions } from '../../config.js';

const isProd = process.env.NODE_ENV === 'production';

// Оптимизация изображений
export const img = () => {
  return gulp
    .src(paths.src.img, { encoding: false })
    .pipe(
      gulpif(
        isProd,
        imagemin({
          verbose: true, // Выводим информацию об оптимизации
        })
      )
    )
    .pipe(gulp.dest(paths.build.img));
};

// Конвертация изображений в WebP
export const convertToWebp = () => {
  // Обрабатываем PNG в WebP
  const pngStream = gulp
    .src(paths.src.pngImages)
    .pipe(webp(webpOptions.png))
    .pipe(gulp.dest(paths.build.img));

  // Обрабатываем JPG в WebP
  const jpgStream = gulp
    .src(paths.src.jpgImages)
    .pipe(webp(webpOptions.jpg))
    .pipe(gulp.dest(paths.build.img));

  // Возвращаем промис, который завершается когда завершены оба потока
  return Promise.all([
    new Promise((resolve) => pngStream.on('end', resolve)),
    new Promise((resolve) => jpgStream.on('end', resolve)),
  ]);
};

// Создание SVG-спрайта
export const sprite = () => {
  return gulp
    .src(paths.src.svgSprite)
    .pipe(rename('sprite.svg'))
    .pipe(svgstore(svgSpriteOptions))
    .pipe(gulp.dest(paths.build.img));
};
