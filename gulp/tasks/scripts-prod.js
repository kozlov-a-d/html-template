const concat     = require('gulp-concat'),
      filesExist = require('files-exist'),
      include    = require('gulp-include'),
      merge      = require('gulp-merge'),
      stripDebug = require('gulp-strip-debug'),
      uglify     = require('gulp-uglify');

module.exports = (gulp, dir, scripts) => {
    return () => {
        let stream = merge();

        scripts.forEach((scripts) => {
            stream.add(gulp.src(filesExist(scripts.src))
                .pipe(include())
                .on('error', console.log)
                .pipe(stripDebug())
                .pipe(concat(scripts.target))
                .pipe(uglify())
                .pipe(gulp.dest(dir.prod)));
        });

        return stream;
    };
};
