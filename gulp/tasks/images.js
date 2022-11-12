import gulp from "gulp";
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";
import paths from "../paths.js";

const images = () =>
  gulp
    .src(paths.src.images)
    .pipe(
      imagemin([
        gifsicle({ interlaced: true }),
        mozjpeg({ quality: 75, progressive: true }),
        optipng({ optimizationLevel: 5 }),
        svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest(paths.dist.images));

export default images;
