// Dependencies
var gulp           = require('gulp'),
    autoprefixer   = require('gulp-autoprefixer'),
    base64         = require('gulp-base64'),
    bowerFiles     = require('main-bower-files'),
    cache          = require('gulp-cache'),
    concat         = require('gulp-concat'),
    cssBeautify    = require('gulp-cssbeautify'),
    csso           = require('gulp-csso'),
    expect         = require('gulp-expect-file'),
    hash           = require('gulp-hash'),
    imageMin       = require('gulp-imagemin'),
    include        = require("gulp-include"),
    jpegRecompress = require('imagemin-jpeg-recompress'),
    merge          = require('gulp-merge'),
    pngQuant       = require('imagemin-pngquant'),
    rewriteCSS     = require('gulp-rewrite-css'),
    sass           = require('gulp-sass'),
    stripDebug     = require('gulp-strip-debug'),
    uglify         = require('gulp-uglify'),
    uglifyCSS      = require('gulp-uglifycss'),
    sourcemaps     = require('gulp-sourcemaps'),
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
                'assets/ui-kit/components/scroll/scroll.component.js',
                'assets/ui-kit/core.js',

                // utilities
                'assets/ui-kit/utilities/media-event-listener/media-event-listener.js',
                // components
                'assets/ui-kit/components/menu-smart/jquery.menu-smart.js',
                'assets/ui-kit/components/menu-mobile/menu-mobile.vue.js',
                'assets/ui-kit/components/menu-mobile/menu-mobile.js',
                // content
                'assets/ui-kit/content/tables/tables.js',
                'assets/ui-kit/content/spoiler/spoiler.js',
                // core.js
                'assets/scripts/_extends.js',
                'assets/scripts/**/[^_]*.js',

                'assets/ui-kit/utilities/media-event-listener/media-event-listener-init.js',

                // скрипты с проекта
                "assets/scripts/main.js"
            ]
        }
    ],
    html = [
        {
            target: 'web/',
            src: 'pages/[^_]*.html'
        }
    ],
    scss = [
        {
            src: [
                'assets/styles/**/*.scss'
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
                        min:     65,
                        max:     70,
                        quality: 'medium'
                    }),
                    imageMin.svgo(),
                    imageMin.optipng({
                        optimizationLevel: 3
                    }),
                    pngQuant({
                        quality: '65-70',
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
            // .pipe(expect(scripts.src))
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

        styles.forEach(function (styles) {
            stream.add(gulp.src(styles.src)
            // .pipe(expect(styles.src))
                .pipe(sourcemaps.init())
                .pipe(sass().on('error', sass.logError))
                .pipe(autoprefixer({
                    browsers: ['last 15 versions', '>1%', 'ie 10'],
                    cascade:  false
                }))
                .pipe(rewriteCSS({
                    destination: dir.dev
                }))
                .pipe(concat(styles.target))
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
            }
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
            return gulp.watch(scripts.src, ['scripts']);
        })).concat(styles.map(function (styles) {
            return gulp.watch(styles.src, ['styles']);
        })).concat(html.map(function (html) {
            return gulp.watch(html.src, ['html']);
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
            // .pipe(expect(scripts.src))
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
            // .pipe(expect(styles.src))
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
