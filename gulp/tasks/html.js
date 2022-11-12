import gulp from "gulp";
import htmlmin from "gulp-htmlmin";
import paths from "../paths.js";

const minify = () => {
  return gulp
    .src(paths.src.html)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.dist.html));
};

export default minify;
