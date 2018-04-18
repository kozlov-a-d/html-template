module.exports = (gulp, html, scripts, scss, styles) => {
    return () => {
        html.map((html) => {
            gulp.watch(html.watch, ['html']);
        });
        scripts.map((scripts) => {
            gulp.watch(scripts.src, ['scripts']);
        });
        scss.map((scss) => {
            gulp.watch(scss.src, ['styles']);
        });
        styles.map((styles) => {
            gulp.watch(styles.src, ['styles']);
        });
    };
};
