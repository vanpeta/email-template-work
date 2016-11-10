var gulp = require("gulp");
var sass = require("gulp-sass");
var bourbon = require("node-bourbon").includePaths;
var neat = require("node-neat").includePaths;
var browserSync = require("browser-sync");

//Compile all gulp tasks
gulp.task('default', []);

//Live reload anytime a file changes
gulp.task("watch", ["browserSync", "sass"], function () {
  gulp.watch("src/scss/**/*.scss", ["sass"]);
  gulp.watch("dist/*.html").on("change", browserSync.reload);
});

// Spin up a server
gulp.task("browserSync", function() {
  browserSync({
    server: {
      baseDir: "dist"
    }
  });
});

//Compile sass files
gulp.task("sass", function() {
  gulp.src("src/scss/*.scss")
    .pipe(sass({
      includePaths: bourbon,
      includePaths: neat
    }))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.reload({
      stream: true
    }))
});
