# Gulp Project Template 2.0

Современный шаблон для фронтенд-разработки, основанный на Gulp 5.0.0. Проект организован в соответствии с принципами SOLID и современными практиками разработки.

## Особенности

- **Модульная структура**: разделение задач по принципу единой ответственности (SRP)
- **Gulp 5.0.0**: использование последней версии Gulp с современным API
- **Оптимизация сборки**: режимы разработки и продакшн
- **Автоматическая обработка**: HTML, CSS/SCSS, JS, изображений, шрифтов
- **Оптимизация изображений**: автоматическая конвертация в WebP
- **SVG-спрайты**: автоматическое создание SVG-спрайтов
- **Babel**: транспиляция JavaScript в совместимый код
- **БЭМ-структура**: организация стилей по методологии БЭМ

## Требования

- Node.js 18.x и выше
- npm 8.x и выше

## Структура проекта

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
├── .stylelintrc      # Конфигурация StyleLint
├── config.js         # Конфигурация путей и опций
├── gulpfile.js       # Главный файл Gulp
├── package.json      # Зависимости и скрипты
└── README.md         # Документация проекта
```

## Установка

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

## Использование

### Режим разработки

```bash
npm start
```

### Сборка проекта

```bash
npm run build
```

### Сборка проекта для продакшн

```bash
NODE_ENV=production npm run build
```

## Задачи Gulp

- `gulp` - запуск сервера разработки
- `gulp build` - сборка проекта
- `gulp webp` - конвертация изображений в WebP

## Модули задач

Проект организован по принципу единой ответственности (SRP):

- **clean.js** - очистка директории сборки
- **html.js** - обработка HTML файлов
- **styles.js** - обработка CSS/SCSS файлов
- **scripts.js** - обработка JavaScript файлов
- **images.js** - обработка изображений
- **fonts.js** - копирование шрифтов
- **server.js** - запуск сервера разработки

## Принципы SOLID в проекте

Структура проекта основана на принципах SOLID:

1. **Single Responsibility Principle (SRP)**: каждый модуль отвечает только за одну задачу
2. **Open/Closed Principle (OCP)**: модули открыты для расширения, но закрыты для модификации
3. **Liskov Substitution Principle (LSP)**: компоненты легко заменяемы
4. **Interface Segregation Principle (ISP)**: модули имеют специализированные интерфейсы
5. **Dependency Inversion Principle (DIP)**: зависимости инвертированы через конфигурационный файл

## Автор

Sergey Konovalenko - [sergeykonovalenko5550199@gmail.com](mailto:sergeykonovalenko5550199@gmail.com)

## Лицензия

MIT
