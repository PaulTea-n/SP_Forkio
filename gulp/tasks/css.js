import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCSS from "gulp-clean-css";
import concat from "gulp-concat";
import autoprefixer from "gulp-autoprefixer";
import paths from "../paths.js";
const sass = gulpSass(dartSass);

const buildStyles = () =>
  gulp
    .src(paths.src.css)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat("styles.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.dist.css));

export default buildStyles;
