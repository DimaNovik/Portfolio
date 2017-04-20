var gulp = require('gulp');
var plumber = require('gulp-plumber');

// connect
var connect = require('gulp-connect-multi')(); 

gulp.task('connect', connect.server({
    host: '127.0.0.1',
    root: ['site'],
    port: 9090,
    livereload: true,
    open: {
        browser: 'chrome'
    }
}));



// templates
var pug = require('gulp-pug');

gulp.task('templates', function() {
    gulp.src('./dev/pug/**/*.pug')
        .pipe(plumber())
        .pipe(pug())
        .pipe(gulp.dest('./site/'))
        .pipe(connect.reload());
});

// style copy
var copy = require('gulp-copy');

gulp.task('copy', function () {
  gulp.src('./dev/css/*.*')
    .pipe(gulp.dest('./site/css'))
    .pipe(connect.reload());
});

gulp.task('copy-images', function () {
  gulp.src('./dev/img/**/*.*')
    .pipe(gulp.dest('./site/img'))
    .pipe(connect.reload());
});

gulp.task('copy-js', function () {
  gulp.src('./dev/js/*.*')
    .pipe(gulp.dest('./site/js'))
    .pipe(connect.reload());
});


// watcher
gulp.task('watcher', function() {
    gulp.watch('pug/**/*.pug', {cwd:'./dev/'}, ['templates']);
    gulp.watch('css/**/*.css', {cwd:'./dev/'}, ['copy']);
    gulp.watch('img/**/*.*', {cwd:'./dev/'}, ['copy-images']);
    gulp.watch('js/**/*.*', {cwd:'./dev/'}, ['copy-js']);
});

gulp.task('default', ['templates', 'copy', 'copy-images', 'copy-js']);
gulp.task('item', ['default', 'connect', 'watcher']);