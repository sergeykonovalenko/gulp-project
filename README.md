# Gulp Project

<p align="center">
  <img src="src/img/base/gulp.svg" alt="Gulp" width="120">
</p>

<p align="center">
  <!-- Package info -->
  <a href="https://www.npmjs.com/package/gulp"><img src="https://img.shields.io/badge/Gulp-5.0.0-CF4647?style=flat&logo=gulp&logoColor=white" alt="Gulp Version"></a>
  <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Node.js-22.x-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js Version"></a>
  <a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/NPM-11.x-CB3837?style=flat&logo=npm&logoColor=white" alt="NPM Version"></a>
  <a href="https://github.com/sergeykonovalenko/gulp-project/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a><br>
  <!-- Development tools -->
  <a href="https://sass-lang.com/"><img src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white" alt="Sass"></a>
  <a href="https://babeljs.io/"><img src="https://img.shields.io/badge/Babel-F9DC3E?style=flat&logo=babel&logoColor=black" alt="Babel"></a>
  <a href="https://postcss.org/"><img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=flat&logo=postcss&logoColor=white" alt="PostCSS"></a>
  <a href="https://prettier.io/"><img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black" alt="Prettier"></a>
  <a href="https://editorconfig.org/"><img src="https://img.shields.io/badge/EditorConfig-E0EFEF?style=flat&logo=editorconfig&logoColor=000" alt="EditorConfig"></a><br>
  <!-- Core technologies -->
  <a href="https://www.w3.org/html/"><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5"></a>
  <a href="https://www.w3.org/Style/CSS/"><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript"></a>
  <a href="https://browsersync.io/"><img src="https://img.shields.io/badge/Browsersync-FF7139?style=flat&logo=browsersync&logoColor=white" alt="Browsersync"></a><br>
  <!-- Additional features -->
  <a href="https://stylelint.io/"><img src="https://img.shields.io/badge/Stylelint-263238?style=flat&logo=stylelint&logoColor=white" alt="Stylelint"></a>
  <a href="https://bem.info/"><img src="https://img.shields.io/badge/BEM-000000?style=flat&logo=bem&logoColor=white" alt="BEM"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp"><img src="https://img.shields.io/badge/WebP-00A98F?style=flat&logo=webp&logoColor=white" alt="WebP"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/SVG"><img src="https://img.shields.io/badge/SVG-FFB13B?style=flat&logo=svg&logoColor=black" alt="SVG"></a>
  <a href="https://github.com/features/actions"><img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white" alt="ESLint"></a>
</p>

🚀 Современный шаблон для фронтенд-разработки, основанный на Gulp 5.0.0. Проект организован в соответствии с принципами SOLID и современными практиками разработки.

## ✨ Особенности

- 🏗️ **Модульная структура**: разделение задач по принципу единой ответственности (SRP)
- 🔄 **Gulp 5.0.0**: использование последней версии Gulp с современным API
- ⚡ **Оптимизация сборки**: режимы разработки и продакшн
- 🤖 **Автоматическая обработка**: HTML, CSS/SCSS, JS, изображений, шрифтов
- 🖼️ **Оптимизация изображений**: автоматическая конвертация в WebP
- 🎨 **SVG-спрайты**: автоматическое создание SVG-спрайтов
- 📦 **Babel**: транспиляция JavaScript в совместимый код
- 🎯 **БЭМ-структура**: организация стилей по методологии БЭМ

## 📋 Требования

- Node.js 22.x и выше
- npm 11.x и выше

## 📁 Структура проекта

```
gulp-project/
├── build/            # Собранный проект (создается автоматически)
├── src/              # Исходные файлы проекта
│   ├── fonts/        # Шрифты
│   ├── img/          # Изображения
│   ├── js/           # JavaScript файлы
│   ├── sass/         # SCSS файлы
│   └── *.html        # HTML файлы
├── gulp/             # Модули задач Gulp
│   └── tasks/        # Отдельные модули задач
├── .babelrc          # Конфигурация Babel
├── .editorconfig     # Конфигурация редактора
├── .gitignore        # Игнорируемые файлы Git
├── .prettierrc       # Конфигурация Prettier
├── .prettierignore   # Файлы, игнорируемые Prettier
├── .stylelintrc      # Конфигурация StyleLint
├── config.js         # Конфигурация путей и опций
├── gulpfile.js       # Главный файл Gulp
├── package.json      # Зависимости и скрипты
└── README.md         # Документация проекта
```

## 🚀 Установка

1. Клонировать репозиторий:

```bash
git clone https://github.com/sergeykonovalenko/gulp-project.git
```

2. Перейти в директорию проекта:

```bash
cd gulp-project
```

3. Установить зависимости:

```bash
npm install
```

## 🛠️ Использование

### 💻 Режим разработки

```bash
npm start
```

### 📦 Сборка проекта для продакшн

```bash
npm run build
```

## ⚙️ Задачи Gulp

- 🔄 `gulp` - запуск сервера разработки
- 📦 `gulp build` - сборка проекта
- 🖼️ `gulp webp` - конвертация изображений в WebP

## 📚 Модули задач

Проект организован по принципу единой ответственности (SRP):

- 🧹 **clean.js** - очистка директории сборки
- 📄 **html.js** - обработка HTML файлов
- 🎨 **styles.js** - обработка CSS/SCSS файлов
- 📜 **scripts.js** - обработка JavaScript файлов
- 🖼️ **images.js** - обработка изображений
- 📝 **fonts.js** - копирование шрифтов
- 🌐 **server.js** - запуск сервера разработки

## 🎯 Принципы SOLID в проекте

Структура проекта основана на принципах SOLID:

1. 🎯 **Single Responsibility Principle (SRP)**: каждый модуль отвечает только за одну задачу
2. 🔓 **Open/Closed Principle (OCP)**: модули открыты для расширения, но закрыты для модификации
3. 🔄 **Liskov Substitution Principle (LSP)**: компоненты легко заменяемы
4. 🔍 **Interface Segregation Principle (ISP)**: модули имеют специализированные интерфейсы
5. 🔀 **Dependency Inversion Principle (DIP)**: зависимости инвертированы через конфигурационный файл

## 👨‍💻 Автор

<p>
  <strong>Сергей Коноваленко</strong>&nbsp;&nbsp;
  <a href="mailto:sergeykonovalenko5550199@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white" alt="Email"></a>
  <a href="https://t.me/sergeykonovalenko"><img src="https://img.shields.io/badge/Telegram-2CA5E0?style=flat&logo=telegram&logoColor=white" alt="Telegram"></a>
</p>

## 📄 Лицензия

MIT
