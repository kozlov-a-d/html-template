// Dependencies
const gulp         = require('gulp'),
    autoprefixer   = require('gulp-autoprefixer'),
    browserSync    = require('browser-sync'),
    cache          = require('gulp-cache'),
    concat         = require('gulp-concat'),
    csso           = require('gulp-csso'),
    gnf            = require('gulp-npm-files'),
    hash           = require('gulp-hash'),
    imageMin       = require('gulp-imagemin'),
    giflossy       = require('imagemin-giflossy'),
    pngQuant       = require('imagemin-pngquant'),
    mozjpeg        = require('imagemin-mozjpeg'),
    zopfli         = require('imagemin-zopfli'),
    include        = require('gulp-include'),
    merge          = require('gulp-merge'),
    rewriteCSS     = require('gulp-rewrite-css'),
    sass           = require('gulp-sass'),
    sourcemaps     = require('gulp-sourcemaps'),
    stripDebug     = require('gulp-strip-debug'),
    uglify         = require('gulp-uglify'),
    uglifyCSS      = require('gulp-uglifycss'),
    reload         = browserSync.reload;


// Build directories
const dir = {
    dev:  'web/assets/build-dev',
    prod: 'web/assets/build'
};

// Assets
const scripts = [
        {
            target: 'app.js',
            src: [
                'web/assets/node_modules/jquery/dist/jquery.js',
                "web/assets/node_modules/imagesloaded/imagesloaded.pkgd.js",
                'web/assets/node_modules/owl.carousel/dist/owl.carousel.js',
                'web/assets/node_modules/slick-carousel/slick/slick.js',
                'web/assets/node_modules/vue/dist/vue.js',
                'web/assets/node_modules/photoswipe/dist/photoswipe.js',
                'web/assets/node_modules/photoswipe/dist/photoswipe-ui-default.js',

                'assets/scripts/_extends.js',
                'assets/scripts/app.js'
            ],
            watch: [
                'assets/scripts/**/*.js',
                'assets/ui-kit/**/*.js',
                'template-block/**/*.js'
            ]
        }
    ],
    styles = [
        {
            target: 'app.css',
            src:    [
                'web/assets/node_modules/normalize.css/normalize.css',
                'web/assets/node_modules/animate.css/animate.css',
                'web/assets/node_modules/owl.carousel/dist/assets/owl.carousel.css',
                'web/assets/node_modules/owl.carousel/dist/assets/owl.theme.default.css',
                'web/assets/node_modules/slick-carousel/slick/slick.scss',
                'web/assets/node_modules/slick-carousel/slick/slick-theme.scss',
                'web/assets/node_modules/photoswipe/dist/photoswipe.css',
                'web/assets/node_modules/photoswipe/dist/default-skin/default-skin.css',

                'assets/styles/app.scss'
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
    html = [
        {
            target: 'web/',
            src:    'html/**/[^_]*.html',
            watch: [
                'html/**/*.html',
                'template-block/**/*.html'
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
    scss = [
        {
            watch: [
                'assets/styles/**/*.scss',
                'assets/ui-kit/**/*.scss',
                'template-block/**/*.scss'
            ]
        }
    ];

// Tasks
gulp
// Common
    .task('browser-sync', function () {
        browserSync.init({
            server: {
                baseDir: './web'
            }
        });
    })
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
                    pngQuant({ speed: 1, quality: 90 }),
                    zopfli({ more: true }),
                    giflossy({ optimizationLevel: 3, optimize: 3, lossy: 2 }),
                    imageMin.svgo({ plugins: [{  removeViewBox: false }] }),
                    imageMin.jpegtran({ progressive: true, arithmetic: true }),
                    mozjpeg({ quality: 90 })
                ], {
                    verbose: true
                })))
                .pipe(gulp.dest(images.target))
                .pipe(reload({
                    stream: true
                })));
        });

        return stream;
    })
    .task('vendor', function() {
        return gulp.src(gnf(), {
            base: './'
        })
            .pipe(gulp.dest('web/assets'));
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
                .pipe(reload({
                    stream: true
                }));
        });

        return stream;
    })
    .task('styles', function () {
        var stream = merge();

        styles.forEach(function (styles) {
            stream.add(gulp.src(styles.src)
                .pipe(sourcemaps.init())
                .pipe(sass().on('error', sass.logError))
                .pipe(autoprefixer({
                    browsers: ['last 2 versions', '>1%', 'ie 10'],
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
    })
    .task('build', ['vendor', 'fonts', 'images', 'scripts', 'styles'])
    .task('watch', ['build'], function () {
        scripts.map(function (scripts) {
            gulp.watch(scripts.watch, ['scripts']);
        });
        scss.map(function (scss) {
            gulp.watch(scss.watch, ['styles']);
        });
        styles.map(function (styles) {
            gulp.watch(styles.watch, ['styles']);
        });
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
                    browsers: ['last 2 versions', '>1%', 'ie 10'],
                    cascade:  false
                }))
                .pipe(csso())
                .pipe(rewriteCSS({
                    destination: dir.prod
                }))
                .pipe(uglifyCSS({
                    uglyComments: true
                }))
                .pipe(concat(styles.target))
                .pipe(gulp.dest(dir.prod)));
        });

        return stream;
    })
    .task('build-prod', ['vendor', 'fonts', 'images', 'scripts-prod', 'styles-prod'], function () {
        var getTarget = function (assets) {
            return [dir.prod, assets.target].join('/');
        };

        return gulp.src(scripts.map(getTarget).concat(styles.map(getTarget)), {base: 'web'})
            .pipe(hash({
                template: '<%= name %><%= ext %>?<%= hash %>'
            }))
            .pipe(hash.manifest('manifest.json'))
            .pipe(gulp.dest(dir.prod));
    })
    // HTML
    .task('html', function () {
        var stream = merge();

        html.forEach(function (html) {
            stream.add(gulp.src(html.src)
                .pipe(include())
                .pipe(gulp.dest(html.target))
                .pipe(reload({
                    stream: true
                }))
            );
        });

        return stream;
    })
    .task('build-html', ['vendor', 'fonts', 'images', 'scripts', 'styles', 'html'])
    .task('watch-html', ['build-html'], function () {
        scripts.map(function (scripts) {
            gulp.watch(scripts.watch, ['scripts']);
        });
        scss.map(function (scss) {
            gulp.watch(scss.watch, ['styles']);
        });
        styles.map(function (styles) {
            gulp.watch(styles.watch, ['styles']);
        });
        html.map(function (html) {
            gulp.watch(html.watch, ['html']);
        });
    })
    .task('serve-html', ['build-html', 'browser-sync', 'watch-html']);
