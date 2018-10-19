const gulp = require("gulp"); // Load Gulp!
// Now that we've installed the uglify package we can require it:
const uglify = require("gulp-uglify"),
  rename = require("gulp-rename");
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');
gulp.task("default", function() {
  return gulp
    .src("./js/*.js") // What files do we want gulp to consume?
    .pipe(uglify()) // Call the uglify function on these files
    .pipe(rename({ extname: ".min.js" })) // Rename the uglified file
    .pipe(gulp.dest("./build/js")); // Where do we put the result?
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
  return gulp.src("./js/*.js").pipe(eslint(
  ))
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});