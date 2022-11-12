import gulp from "gulp";
import clean from "gulp-clean";
import paths from "../paths.js";

const cleanDist = () =>
  gulp.src(paths.clean.del, { read: false }).pipe(clean());

export default cleanDist;
