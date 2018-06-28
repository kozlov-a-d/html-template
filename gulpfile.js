// Dependencies
const gulp         = require('gulp'),
      gulpSequence = require('gulp-sequence');

// Build directories
const dir = {
    dev:  'web/assets/build-dev',
    prod: 'web/assets/build'
};

// Assets
const scripts = [
        {
            target: 'app.js',
            src:    [
                'web/assets/node_modules/jquery/dist/jquery.js',
                'web/assets/node_modules/bazinga-translator/js/translator.js',
                'web/assets/node_modules/imagesloaded/imagesloaded.pkgd.js',
                'web/assets/node_modules/inputmask/dist/inputmask/inputmask.js',
                'web/assets/node_modules/inputmask/dist/inputmask/jquery.inputmask.js',
                'web/assets/node_modules/noty/lib/noty.js',
                'web/assets/node_modules/owl.carousel/dist/owl.carousel.js',
                'web/assets/node_modules/slick-carousel/slick/slick.js',
                'web/assets/node_modules/vue/dist/vue.js',
                'web/assets/node_modules/photoswipe/dist/photoswipe.js',
                'web/assets/node_modules/photoswipe/dist/photoswipe-ui-default.js',

                // 'assets/vendor/googlemaps/markerwithlabel.js',
                'assets/vendor/highslide/highslide-full.js',

                'assets/translations/messages/en.js',
                'assets/translations/config.js',

                'assets/scripts/app.js',
                'assets/scripts/form.js',
                'assets/scripts/inputmask.js',
                'assets/scripts/novalidate.js',

                'assets/scripts/extend.js',
                'assets/scripts/main.js'
            ],
            watch: [
                'assets/ds-kit/**/*.js',
                'assets/scripts/**/*.js',
                'templates-html/**/*.js'
            ]
        }
    ],
    styles = [
        {
            target: 'app.css',
            src:    [
                'assets/styles/fonts.scss',
                
                'web/assets/node_modules/normalize.css/normalize.css',
                // 'web/assets/node_modules/animate.css/animate.css',
                'web/assets/node_modules/noty/lib/noty.css',
                'web/assets/node_modules/noty/lib/themes/sunset.css',
                'web/assets/node_modules/owl.carousel/dist/assets/owl.carousel.css',
                'web/assets/node_modules/owl.carousel/dist/assets/owl.theme.default.css',
                'web/assets/node_modules/slick-carousel/slick/slick.scss',
                'web/assets/node_modules/slick-carousel/slick/slick-theme.scss',
                'web/assets/node_modules/photoswipe/dist/photoswipe.css',
                'web/assets/node_modules/photoswipe/dist/default-skin/default-skin.css',

                'assets/styles/app.scss'
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
            src:    'html/**/[^_]*.{html,twig}',
            watch: [
                'html/**/*.{html,twig}',
                'templates-html/**/*.{html,twig}'
            ]
        }
    ],
    images = [
        {
            mask:   '**/*.*',
            target: 'web/assets/images',
            src:    [
                'assets/images/**/*.*'
            ]
        }
    ],
    scss = [
        {
            src: [
                'assets/styles/**/*.scss'
            ],
            watch: [
                'assets/ds-kit/**/*.{css,scss}',
                'assets/styles/**/*.{css,scss}',
                'templates-html/**/*.{css,scss}'
            ]
        }
    ];

// Tasks
gulp
    // Common
    .task('browser-sync', require('./gulp/tasks/browser-sync')())
    .task('clear', require('./gulp/tasks/clear')())
    .task('fonts', require('./gulp/tasks/fonts')(gulp, fonts))
    .task('images', require('./gulp/tasks/images')(gulp, images))
    .task('vendor', require('./gulp/tasks/vendor')(gulp))
    // Dev
    .task('scripts', require('./gulp/tasks/scripts')(gulp, dir, scripts))
    .task('styles', require('./gulp/tasks/styles')(gulp, dir, styles))
    .task('build', gulpSequence('vendor', ['fonts', 'scripts', 'styles']))
    .task('watch', ['build'], require('./gulp/tasks/watch')(gulp, scripts, scss, styles))
    // Prod
    .task('scripts-prod', ['scripts'], require('./gulp/tasks/scripts-prod')(gulp, dir, scripts))
    .task('styles-prod', ['styles'], require('./gulp/tasks/styles-prod')(gulp, dir, styles))
    .task('manifest', require('./gulp/tasks/manifest')(gulp, dir, images, scripts, styles))
    .task('build-prod', gulpSequence('vendor', ['fonts', 'scripts-prod', 'styles-prod'], 'manifest'))
    // HTML
    .task('html', require('./gulp/tasks/html')(gulp, html))
    .task('build-html', ['build', 'html', 'images'])
    .task('watch-html', ['build-html'], require('./gulp/tasks/watch-html')(gulp, html, scripts, scss, styles, images))
    .task('serve-html', ['build-html', 'browser-sync', 'watch-html'])
    .task('generate',  require('./gulp/tasks/generate')(gulp));
