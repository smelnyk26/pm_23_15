const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Вказуємо компілятор SASS
const autoprefixer = require('gulp-autoprefixer'); // Додаємо імпорт autoprefixer
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

//копіювання HTML файлів в папку dist
gulp.task ( "html", function () {
 return gulp.src ( "src / *. html")
 .pipe (gulp.dest ( "dist"));
});

// Задача для компіляції SASS в CSS
gulp.task('sass', function () {
  return gulp.src('src/sass/*.sass') // Вхідні файли SASS
    .pipe(sass().on('error', sass.logError)) // Компіляція SASS в CSS
    .pipe(autoprefixer({ // Використовуємо autoprefixer
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    })) // Додавання префіксів
    .pipe(cssnano()) // Мінімізація CSS
    .pipe(rename({ suffix: '.min' })) // Перейменування файлу
    .pipe(gulp.dest('dist/css')); // Вихідна папка для CSS
});

// Задача для об'єднання і мінімізації JS-файлів
gulp.task('scripts', function () {
  return gulp.src('src/js/*.js') // Вхідні JS-файли
    .pipe(concat('scripts.js')) // Об'єднання файлів
    .pipe(uglify()) // Мінімізація JavaScript
    .pipe(rename({ suffix: '.min' })) // Перейменування файлу
    .pipe(gulp.dest('dist/js')); // Вихідна папка для JS
});

// Задача для стиснення зображень
gulp.task('images', async function () {
  const imagemin = await import('gulp-imagemin'); // Динамічний імпорт для gulp-imagemin

  return gulp.src('src/images/*.{jpg,jpeg,png,gif}') // Вхідні зображення
    .pipe(imagemin.default({ // Стиснення зображень
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true
    }))
    .pipe(gulp.dest('dist/images')); // Вихідна папка для стиснутих зображень
});


// Задача для відстеження змін в файлах та виконання інших задач
gulp.task('watch', function () {
  gulp.watch('src/*.html', gulp.series('html')); // Слідкування за змінами в HTML-файлах та виклик задачі 'html'
  gulp.watch('src/sass/*.sass', gulp.series('sass')); // Слідкування за змінами в SASS-файлах та виклик задачі 'sass'
  gulp.watch('src/images/*.{jpg,jpeg,png,gif}', gulp.series('images')); // Слідкування за змінами в зображеннях та виклик задачі 'images'
  gulp.watch('src/js/*.js', gulp.series('scripts')); // Слідкування за змінами в JS-файлах та виклик задачі 'scripts'
});


// Задача "default" і її послідовності
gulp.task('default', gulp.parallel('html','sass', 'images', 'scripts','watch'));
