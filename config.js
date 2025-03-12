/**
 * Конфигурационный файл для Gulp задач
 * Содержит настройки путей и опций для тасков
 */

export const paths = {
  src: {
    base: 'src',
    html: 'src/*.html',
    fonts: 'src/fonts/*.{woff,woff2}',
    scss: 'src/sass/style.scss',
    cssVendor: 'src/sass/vendor/*.css',
    js: 'src/js/*.js',
    jsVendor: 'src/js/vendor/*.js',
    imgBase: 'src/img/base/*.*',
    imgBg: 'src/img/bg/*.*',
    imgFavicon: 'src/img/favicon/*.*',
    imgOg: 'src/img/og/*.*',
    pngImages: 'src/img/**/*.png',
    jpgImages: 'src/img/**/*.jpg',
    svgSprite: 'src/img/icon-*.svg'
  },
  build: {
    base: 'build',
    html: 'build',
    fonts: 'build/fonts',
    css: 'build/css',
    js: 'build/js',
    imgBase: 'build/img/base',
    imgBg: 'build/img/bg',
    imgFavicon: 'build/img/favicon',
    imgOg: 'build/img/og',
    img: 'build/img'
  },
  watch: {
    html: 'src/*.html',
    fonts: 'src/fonts/*.{woff,woff2}',
    scss: ['src/sass/*.{scss,sass}', 'src/sass/modules/*.{scss,sass}', 'src/sass/spec/*.scss'],
    cssVendor: 'src/sass/vendor/*.css',
    js: 'src/js/*.js',
    jsVendor: 'src/js/vendor/*.js',
    imgBase: 'src/img/base/*.*',
    imgBg: 'src/img/bg/*.*',
    imgFavicon: 'src/img/favicon/*.*',
    imgOg: 'src/img/og/*.*'
  }
};

export const serverConfig = {
  server: 'build/',
  notify: false,
  open: true
};

export const sassOptions = {
  outputStyle: 'expanded',
  indentWidth: 4
};

export const webpOptions = {
  png: {
    lossless: true
  },
  jpg: {
    quality: 85
  }
};

export const svgSpriteOptions = {
  inlineSvg: true
};
