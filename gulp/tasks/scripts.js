const browserSync = require('browser-sync'),
      concat      = require('gulp-concat'),
      filesExist  = require('files-exist'),
      include     = require('gulp-include'),
      merge       = require('gulp-merge'),
      sourcemaps  = require('gulp-sourcemaps');
const reload      = browserSync.reload;

module.exports = (gulp, dir, scripts) => {
    return () => {
        let stream = merge();

        scripts.forEach((scripts) => {
            stream.add(gulp.src(filesExist(scripts.src))
                .pipe(include())
                .pipe(sourcemaps.init())
                .on('error', console.log)
                .pipe(concat(scripts.target))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(dir.dev)))
                .pipe(reload({
                    stream: true
                }));
        });

        return stream;
    };
};
