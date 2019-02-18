const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const jshint = require('gulp-jshint');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

// Compile Sass to css and place it in css/styles.css
const styles = () => {
  return gulp
    .src('src/scss/*.scss')
    .pipe(sass({
      'sourcemap=none': true
    }))
    .pipe(concat('styles.css'))
    .pipe(autoprefixer('last 2 version', 'ie 9'))
    .pipe(gulp.dest('css/'));
}

// Watch for changes in scss files
// Watch for errors in js file
const watchFiles = () => {
  gulp.watch('src/scss/**/*.scss', styles);
  gulp.watch('src/js/*.js', compress);
}

// Catch JS errors
const scriptLint = () => {
  return gulp
    .src('src/js/*.js')
    .pipe(jshint.reporter('jshint-stylish'));
}

// Ugligy JS
const compress = () => {
  return gulp
    .src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js'));
}

// Minify CSS
const minifyCss = () => {
  return (
    gulp
    .src('css/styles.css')
    .pipe(rename({suffix: ".min"}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'))
  );
}

// All tasks together
const build = gulp.series(gulp.parallel(styles, scriptLint, watchFiles));

// 'default' can be skip the declareance without any options
// you can only call "gulp" to invoke all at once
exports.default = build;