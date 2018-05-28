module.exports = (gulp, html, scripts, scss, styles, images) => {
    return () => {
        html.map((html) => {
            gulp.watch(html.watch, ['html']);
        });
        scripts.map((scripts) => {
            gulp.watch(scripts.watch, ['scripts']);
        });
        scss.map((scss) => {
            gulp.watch(scss.watch, ['styles']);
        });
        styles.map((styles) => {
            gulp.watch(styles.src, ['styles']);
        });
        images.map((images) => {
            gulp.watch(images.src, ['images']);
        });
    };
};
