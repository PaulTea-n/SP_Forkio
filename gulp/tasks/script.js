import gulp from "gulp";
import concat from "gulp-concat";
import terser from "gulp-terser";
import paths from "../paths.js";

const scripts = () =>
  gulp
    .src(paths.src.js)
    .pipe(concat("scripts.min.js"))
    .pipe(terser())
    .pipe(gulp.dest(paths.dist.js));

export default scripts;
