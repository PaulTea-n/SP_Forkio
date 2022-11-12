export default {
  src: {
    html: "./src/**/*.html",
    js: "./src/**/*.js",
    css: "./src/sass/main.scss",
    images: "./src/images/**/*",
  },

  dist: {
    html: "./dist",
    js: "./dist/script",
    css: "./dist/css",
    images: "./dist/images/",
  },

  watch: {
    html: "./src/**/*.html",
    js: "./src/**/*.js",
    css: "./src/**/*.scss",
    images: "./src/images/**/*",
  },

  clean: {
    del: "./dist/*",
  },
};
