// Dependencies
var gulp           = require('gulp'),

    cache          = require('gulp-cache'),
    hash           = require('gulp-hash'),
    concat         = require('gulp-concat'),
    include        = require("gulp-include"),
    merge          = require('gulp-merge'),
    stripDebug     = require('gulp-strip-debug'),
    uglify         = require('gulp-uglify'),
    uglifyCSS      = require('gulp-uglifycss'),
    sourcemaps     = require('gulp-sourcemaps'),

    htmlhint       = require("gulp-htmlhint"),

    sass           = require('gulp-sass'),
    autoprefixer   = require('gulp-autoprefixer'),
    base64         = require('gulp-base64'),
    rewriteCSS     = require('gulp-rewrite-css'),
    csso           = require('gulp-csso'),
    postcss        = require('gulp-postcss'),
    focus          = require('postcss-focus'),
    cssMqpacker    = require('css-mqpacker'),
    cssMqpackerSort = require('sort-css-media-queries'),

    imageMin       = require('gulp-imagemin'),
    jpegRecompress = require('imagemin-jpeg-recompress'),
    pngQuant       = require('imagemin-pngquant'),

    browserSync    = require("browser-sync"),
    reload         = browserSync.reload;

// Build directories
var dir = {
    dev:  'web/assets/build-dev',
    prod: 'web/assets/build'
};

// Assets
var scripts = [
        {
            target: 'app.js',
            src: [
                // скопированые вендоры из node_modules
                "web/assets/vendor/jquery/jquery.min.js",
                "web/assets/vendor/imagesloaded/imagesloaded.pkgd.js",
                "web/assets/vendor/bxslider/jquery.bxslider.js",
                "web/assets/vendor/owl.carousel/owl.carousel.js",
                "web/assets/vendor/vue/vue.min.js",

                // core.js
                'assets/ui-kit/core.js',

                // utilities
                'assets/ui-kit/temp/media-event-listener.js',
                // components
                'assets/ui-kit/jquery-plugins/menu-smart/jquery.menu-smart.js',
                'assets/ui-kit/jquery-plugins/menu-mobile/menu-mobile.vue.js',
                'assets/ui-kit/jquery-plugins/menu-mobile/menu-mobile.js',
                'assets/ui-kit/jquery-plugins/modal-ajax/jquery.modal-ajax.js',
                // content
                'assets/ui-kit/jquery-plugins/tables/tables.js',
                'assets/ui-kit/jquery-plugins/spoiler/spoiler.js',
                // core.js
                'assets/scripts/_extends.js',
                'assets/scripts/**/[^_]*.js',

                'assets/ui-kit/temp/media-event-listener-init.js',

                // скрипты с проекта
                "assets/scripts/main.js"
            ],
            watch: [
                'assets/scripts/**/*.js',
                'assets/ui-kit/**/*.js',
                'template-block/**/*.js'
            ]
        }
    ],
    html = [
        {
            target: 'web/',
            src: 'pages/[^_]*.html',
            watch: [
                'pages/**/*.html',
                'template-block/**/*.html'
            ]
        }
    ],
    scss = [
        {
            src: [
                'assets/styles/**/*.scss',
                'assets/ui-kit/**/*.scss',
                'template-block/**/*.scss'
            ]
        }
    ],
    styles = [
        {
            target: 'app.css',
            src:    [
                // скопированые вендоры из node_modules
                'web/assets/vendor/normalize.css/normalize.css',
                'web/assets/vendor/animate.css/animate.css',
                'web/assets/vendor/owl.carousel/assets/owl.carousel.css',
                'web/assets/vendor/owl.carousel/assets/owl.theme.default.css',
                'web/assets/vendor/bxslider/dist/jquery.bxslider.css',
                // cтили с проекта
                'assets/styles/main.scss'
            ],
            watch: [
                'assets/styles/**/*.scss',
                'assets/ui-kit/**/*.scss',
                'template-block/**/*.scss'
            ]
        }
    ],
    fonts = [
        {
            target: 'web/assets/fonts',
            src:    [
                'assets/fonts/**/*.*'
            ]
        }
    ],
    images = [
        {
            target: 'web/assets/images',
            src:    [
                'assets/images/**/*.*'
            ]
        }
    ],
    vendor = [
        { // normalize.css
            target: 'web/assets/vendor/normalize.css/',
            src:    ['node_modules/normalize.css/normalize.css']
        },
        { // animate.css
            target: 'web/assets/vendor/animate.css/',
            src:    ['node_modules/animate.css/animate.css']
        },
        { // jquery
            target: 'web/assets/vendor/jquery/',
            src:    'node_modules/jquery/dist/*.js'
        },
        { // bxslider/images
            target: 'web/assets/vendor/bxslider/images/',
            src:    'node_modules/bxslider/dist/images/*'
        },
        { // bxslider
            target: 'web/assets/vendor/bxslider/',
            src:    [
                'node_modules/bxslider/dist/*.js',
                'node_modules/bxslider/dist/*.css'
            ]
        },
        { // owl.carousel/assets
            target: 'web/assets/vendor/owl.carousel/assets/',
            src:    'node_modules/owl.carousel/dist/assets/*'
        },
        { // owl.carousel
            target: 'web/assets/vendor/owl.carousel/',
            src:    [
                'node_modules/owl.carousel/dist/*.js'
            ]
        },
        { // vue
            target: 'web/assets/vendor/vue/',
            src:    [
                'node_modules/vue/dist/vue.min.js'
            ]
        },
        { // imagesloaded
            target: 'web/assets/vendor/imagesloaded/',
            src:    [
                'node_modules/imagesloaded/imagesloaded.pkgd.js'
            ]
        }
    ];

// Tasks
var watchers = [];

gulp
// Common
    .task('clear', function (done) {
        return cache.clearAll(done);
    })
    .task('fonts', function() {
        var stream = merge();

        fonts.forEach(function (fonts) {
            stream.add(gulp.src(fonts.src)
                .pipe(gulp.dest(fonts.target)));
        });

        return stream;
    })
    .task('images', function() {
        var stream = merge();

        images.forEach(function (images) {
            stream.add(gulp.src(images.src)
                .pipe(cache(imageMin([
                    imageMin.gifsicle({
                        interlaced: true
                    }),
                    imageMin.jpegtran({
                        progressive: true
                    }),
                    jpegRecompress({
                        loops:   5,
                        min:     75,
                        max:     80,
                        quality: 'high'
                    }),
                    imageMin.svgo(),
                    imageMin.optipng({
                        optimizationLevel: 3
                    }),
                    pngQuant({
                        quality: '75-80',
                        speed:   5
                    })
                ], {
                    verbose: true
                })))
                .pipe(gulp.dest(images.target))
                .pipe(reload({stream: true})))
            ;
        });

        return stream;
    })
    .task('vendor', function() {
        vendor.forEach(function (vendor) {
            gulp.src(vendor.src)
                .pipe(gulp.dest(vendor.target))
        });
    })
    // Dev
    .task('scripts', function () {
        var stream = merge();

        scripts.forEach(function (scripts) {
            stream.add(gulp.src(scripts.src)
                .pipe(sourcemaps.init())
                .pipe(include())
                .on('error', console.log)
                .pipe(concat(scripts.target))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(dir.dev)))
                .pipe(reload({stream: true}))
            ;
        });

        return stream;
    })
    .task('styles', function () {
        var stream = merge();
        var processors = [
            focus,
            cssMqpacker({ sort: cssMqpackerSort.desktopFirst })
        ];

        styles.forEach(function (styles) {
            stream.add(gulp.src(styles.src)
                .pipe(sourcemaps.init())
                .pipe(sass({
                    outputStyle: 'expanded',
                    errLogToConsole: true
                }).on('error', sass.logError))
                .pipe(autoprefixer({
                    browsers: ['last 15 versions', '>1%', 'ie 10'],
                    cascade:  false
                }))
                .pipe(rewriteCSS({
                    destination: dir.dev
                }))
                .pipe(concat(styles.target))
                .pipe(postcss(processors))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(dir.dev)))
                .pipe(reload({stream: true}))
            ;
        });

        return stream;
    })
    .task('html', function () {
        var stream = merge();
        html.forEach(function (html) {
            stream.add(gulp.src(html.src)
                .pipe(include())
                .pipe(htmlhint())
                .pipe(htmlhint.reporter())
                .pipe(gulp.dest(html.target))
                .pipe(reload({stream: true}))
            );
        });
        return stream;
    })
    .task('browser-sync', function () {
        browserSync.init({
            server: {
                baseDir: "./web"
            },
            host: 'localhost',
            port: 9080,
            logPrefix: "browserSync"
        });
    })

    // html
    .task('build-html', ['fonts', 'images', 'scripts', 'styles', 'html'])
    .task('watch-html', ['build-html'], function () {
        watchers.forEach(function (watcher) {
            watcher.end();
        });
        watchers = [
            gulp.watch('bower.json', function () {
                reloadBowerAssets();
                gulp.start('scripts', 'watch');
            })
        ].concat(scss.map(function (scss) {
            return gulp.watch(scss.src, ['styles']);
        })).concat(scripts.map(function (scripts) {
            return gulp.watch(scripts.watch, ['scripts']);
        })).concat(styles.map(function (styles) {
            return gulp.watch(styles.watch, ['styles']);
        })).concat(html.map(function (html) {
            return gulp.watch(html.watch, ['html']);
        })).concat(images.map(function (images) {
            return gulp.watch(images.src, ['images']);
        }));
    })
    .task('serve-html', ['build-html', 'browser-sync', 'watch-html'])
    // Dev
    .task('build', ['fonts', 'images', 'scripts', 'styles'])
    .task('watch', ['build'], function () {
        watchers.forEach(function (watcher) {
            watcher.end();
        });
        watchers = [
            gulp.watch('bower.json', function () {
                reloadBowerAssets();
                gulp.start('scripts', 'watch');
            })
        ].concat(scss.map(function (scss) {
            return gulp.watch(scss.src, ['styles']);
        })).concat(scripts.map(function (scripts) {
            return gulp.watch(scripts.src, ['scripts']);
        })).concat(styles.map(function (styles) {
            return gulp.watch(styles.src, ['styles']);
        }));
    })
    // Prod
    .task('scripts-prod', ['scripts'], function () {
        var stream = merge();

        scripts.forEach(function (scripts) {
            stream.add(gulp.src(scripts.src)
                .pipe(include())
                .on('error', console.log)
                .pipe(stripDebug())
                .pipe(concat(scripts.target))
                .pipe(uglify())
                .pipe(gulp.dest(dir.prod)));
        });

        return stream;
    })
    .task('styles-prod', ['styles'], function () {
        var stream = merge();

        styles.forEach(function (styles) {
            stream.add(gulp.src(styles.src)
                .pipe(sass().on('error', sass.logError))
                .pipe(autoprefixer({
                    browsers: ['last 15 versions', '>1%', 'ie 10'],
                    cascade:  false
                }))
                .pipe(csso())
                .pipe(rewriteCSS({
                    destination: dir.prod
                }))
                .pipe(base64())
                .pipe(uglifyCSS({
                    uglyComments: true
                }))
                .pipe(concat(styles.target))
                .pipe(gulp.dest(dir.prod)));
        });

        return stream;
    })
    .task('build-prod', ['fonts', 'images', 'scripts-prod', 'styles-prod'], function () {
        var getTarget = function (assets) {
            return [dir.prod, assets.target].join('/');
        };

        return gulp.src(scripts.map(getTarget).concat(styles.map(getTarget)), {base: 'web'})
            .pipe(hash({
                template: '<%= name %><%= ext %>?<%= hash %>'
            }))
            .pipe(hash.manifest('manifest.json'))
            .pipe(gulp.dest(dir.prod));
    });
