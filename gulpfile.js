const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const cssnano = require('gulp-cssnano');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const prettyError = require('gulp-prettyerror');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');

// Create basic Gulp tasks

gulp.task("sass", function() {
  return gulp
    .src("./sass/style.scss")
    .pipe(prettyError()) // ADD THIS LINE
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("./build/css"))
    .pipe(cssnano())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./build/css"));
});

gulp.task('lint', function() {
  return (
    gulp
      .src(['./js/*.js'])
      // Also need to use it here...
      .pipe(prettyError())
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
  );
});

gulp.task(
  'scripts',
  gulp.series('lint', function() {
    return gulp
      .src('./js/*.js')
      .pipe(terser())
      .pipe(
        rename({
          extname: '.min.js'
        })
      )
      .pipe(gulp.dest('./build/js'));
  })
);

// Set-up BrowserSync and watch

gulp.task('browser-sync', function(done) {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp
    .watch(['build/css/*.css', 'build/js/*.js'])
    .on('change', browserSync.reload);

  done();
});

gulp.task('watch', function(done) {
  gulp.watch('js/*.js', gulp.series('scripts'));
  gulp.watch('sass/*.scss', gulp.series('sass'));
  done();
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));