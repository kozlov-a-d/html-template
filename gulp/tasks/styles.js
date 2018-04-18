const autoprefixer = require('gulp-autoprefixer'),
      browserSync  = require('browser-sync'),
      concat       = require('gulp-concat'),
      filesExist   = require('files-exist'),
      merge        = require('gulp-merge'),
      rewriteCSS   = require('gulp-rewrite-css'),
      sass         = require('gulp-sass'),
      sourcemaps   = require('gulp-sourcemaps');
const reload       = browserSync.reload;

module.exports = (gulp, dir, styles) => {
    return () => {
        let stream = merge();

        styles.forEach((styles) => {
            stream.add(gulp.src(filesExist(styles.src))
                .pipe(sourcemaps.init())
                .pipe(sass().on('error', sass.logError))
                .pipe(autoprefixer({
                    browsers: ['last 2 versions', '>3%', 'ie 10'],
                    cascade:  false
                }))
                .pipe(rewriteCSS({
                    destination: dir.dev
                }))
                .pipe(concat(styles.target))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(dir.dev)))
                .pipe(reload({
                    stream: true
                }));
        });

        return stream;
    };
};
