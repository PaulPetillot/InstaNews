const gulp = require('gulp'),
  prettyError = require('gulp-prettyerror'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglify'),
  eslint = require('gulp-eslint');
  var browserSync = require('browser-sync').create();

gulp.task("default", function() {
 return gulp
   .src("./js/*.js")
   .pipe(uglify())
   .pipe(rename({ extname: ".min.js" }))
   .pipe(gulp.dest("./build/js"));
});

gulp.task("browser-sync", function() {
   browserSync.init({
     server: {
       baseDir: "./"
     }
   });

   gulp
     .watch(['index.html', 'build/css/*.css', 'build/js/*.js'])
     .on('change', browserSync.reload);
 });

gulp.task('lint', function() {
  return gulp.src("./js/*.js")

      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

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