const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Копіювання HTML файлів в папку dist
gulp.task('html', function () {
  return gulp.src('app/*.html') // Змінено шлях до HTML файлів
    .pipe(gulp.dest('dist'));
});

// Компіляція SASS в CSS
gulp.task('sass', function () {
  return gulp.src('app/sass/*.sass') // Змінено шлях до SASS файлів
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
});

// Об'єднання і мінімізація JS-файлів
gulp.task('scripts', function () {
  return gulp.src('app/js/*.js') // Змінено шлях до JS файлів
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'));
});

// Відстеження змін в файлах та виконання інших задач
gulp.task('watch', function () {
  gulp.watch('app/*.html', gulp.series('html')); // Змінено шлях до HTML файлів
  gulp.watch('app/sass/*.sass', gulp.series('sass')); // Змінено шлях до SASS файлів
  gulp.watch('app/js/*.js', gulp.series('scripts')); // Змінено шлях до JS файлів
});

// Задача "default" та її послідовності
gulp.task('default', gulp.parallel('html', 'sass', 'scripts', 'watch'));
