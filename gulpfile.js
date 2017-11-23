'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    // gutil = require('gulp-util'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    // cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    concat =  require('gulp-concat'),
    cssmin = require('gulp-minify-css'),
    // rename = require("gulp-rename"),
    rigger = require('gulp-rigger');


var path = {
    build: {
        js: './web/assets/compiled/',
        style: './web/assets/compiled/',
        html: './web/',
        ui:  './web/assets/compiled/'
    },
    src: {
        js: [
            'web/assets/ui-kit/utilities/media-event-listener/media-event-listener.js',

            'web/assets/ui-kit/components/menu-smart/menu-smart.js',
            'web/assets/ui-kit/components/menu-mobile/menu-mobile.js',

            'web/assets/ui-kit/content/tables/tables.js',
            'web/assets/ui-kit/content/spoiler/spoiler.js',

            'web/assets/scripts/_extends.js',
            'web/assets/scripts/**/[^_]*.js',

            'web/assets/ui-kit/utilities/media-event-listener/media-event-listener-init.js'
        ],
        style: 'web/assets/styles/main.scss',
        html: 'pages/[^_]*.html',
        vendor:{
            js: [
                'bower_components/jquery/dist/jquery.js',
                'bower_components/owl.carousel/dist/owl.carousel.js',
                'bower_components/bxslider-4/dist/jquery.bxslider.js',
                'bower_components/vue/dist/vue.js'
            ],
            css: [
                'bower_components/normalize-css/normalize.css',
                'bower_components/animate.css/animate.css',
                'bower_components/owl.carousel/dist/assets/owl.carousel.css',
                'bower_components/owl.carousel/dist/assets/owl.theme.default.css',
                'bower_components/bxslider-4/dist/jquery.bxslider.css'
            ]
        }
    },
    watch: {
        js: ['web/assets/ui-kit/**/*.js', 'web/assets/scripts/**/*.js'],
        style: ['web/assets/styles/**/*.scss', 'web/assets/ui-kit/**/*.scss'],
        html: ['pages/**/*.html', 'template-block/**/*.html'],
        vendor: 'bower_components/**/*.*',
        templates: 'template-block/**/*.*'
    }
};

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [path.src.style],
            outputStyle: 'expanded',
            sourceMap: true,
            errLogToConsole: true
        }))
        .pipe(prefixer({
            browsers: ['last 2 versions', "> 3%", "ie 11", "ie 10"]
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('web/assets/compiled/'))
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.build.js));
});


gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
});
gulp.task('vendor:build', function () {

    gulp.src(path.src.vendor.js)
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js));

    gulp.src(path.src.vendor.css)
        .pipe(concat('vendor.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('web/assets/compiled/'))

});

gulp.task('build', [
    'vendor:build',
    'html:build',
    'js:build',
    'style:build'
]);

gulp.task('watch', function(){
    watch(path.watch.vendor, function() {
        gulp.start('vendor:build');
    });
    watch(path.watch.html, function() {
        gulp.start('html:build');
    });
    watch(path.watch.js, function() {
        gulp.start('js:build');
    });
    watch(path.watch.style, function() {
        gulp.start('style:build');
    });
    watch(path.watch.templates, function() {
        gulp.start('html:build');
        gulp.start('style:build');
        gulp.start('js:build');
    });
});