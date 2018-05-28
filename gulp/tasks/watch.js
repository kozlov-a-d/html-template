module.exports = (gulp, scripts, scss, styles) => {
    return () => {
        scripts.map((scripts) => {
            gulp.watch(scripts.watch, ['scripts']);
        });
        scss.map((scss) => {
            gulp.watch(scss.watch, ['styles']);
        });
        styles.map((styles) => {
            gulp.watch(styles.src, ['styles']);
        });
    };
};
