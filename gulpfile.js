"use strict";
import gulp from "gulp";
import browserSync from "browser-sync";
const BS = browserSync.create();

import minify from "./gulp/tasks/html.js";
import buildStyles from "./gulp/tasks/css.js";
import scripts from "./gulp/tasks/script.js";
import images from "./gulp/tasks/images.js";
import cleanDist from "./gulp/tasks/clean.js";
import paths from "./gulp/paths.js";

export const build = gulp.series(
  cleanDist,
  gulp.parallel(minify, buildStyles, scripts, images)
);

const serverAndWatch = () => {
  BS.init({
    server: {
      baseDir: "./dist",
    },
  });

  gulp.watch(
    paths.watch.html,
    gulp.series(minify, (done) => {
      BS.reload();
      done();
    })
  );
  gulp.watch(
    paths.watch.css,
    gulp.series(buildStyles, (done) => {
      BS.reload();
      done();
    })
  );

  gulp.watch(
    paths.watch.js,
    gulp.series(scripts, (done) => {
      BS.reload();
      done();
    })
  );

  gulp.watch(
    paths.watch.images,
    gulp.series(images, (done) => {
      done();
    })
  );
};

export const dev = gulp.series(
  cleanDist,
  images,
  gulp.parallel(minify, buildStyles, scripts),
  serverAndWatch
);
