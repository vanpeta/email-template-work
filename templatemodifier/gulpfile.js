var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task('default', []);

gulp.task("watch", ["browserSync"], function () {
  gulp.watch("*.js").on("change", browserSync.reload);
  gulp.watch("*.html").on("change", browserSync.reload);
});

// Spin up a server
gulp.task("browserSync", function() {
  browserSync({
    server: {
      baseDir: "dist"
    }
  })
});
