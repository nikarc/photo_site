const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass', () => {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/styles'));
})

gulp.task('dev', () => {
  browserSync.init({
    server: {
      baseDir: './'
    },
    open: false
  });

  gulp.watch('./src/styles/**/*.scss', ['sass']);
});
