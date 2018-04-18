module.exports = (gulp, scripts, scss, styles) => {
    return () => {
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
