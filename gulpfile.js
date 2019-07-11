// з папки upp в папку dist


var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var rigger = require('gulp-rigger');
var cssimport = require("gulp-cssimport");
var imagemin = require('gulp-imagemin');

gulp.task('html', function () {
    return gulp.src('app/**/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(cssimport())
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('fonts',function () {
    return gulp.src('app/fonts/*')
        .pipe(gulp.dest('dist/fonts/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('jshint', function() {
        gulp.src('app/js/**/*.js')
        .pipe(rigger())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync',  function() {                          // створює сервер
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
});

gulp.task('image', function()
{
    gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', function(){                                  // дивиться за змінами
    gulp.watch('app/**/*.html', gulp.series('html'));
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));      // шлях до паки з scss
    gulp.watch('app/js/**/*.js', gulp.series('jshint'));            // шдях до папки з js
    gulp.watch('app/img/*', gulp.series('image'));
    gulp.watch('app/fonts/*', gulp.series('fonts'));
});


gulp.task('build', gulp.parallel('sass','html','jshint','image','fonts'));             // будує змінами

gulp.task('default', gulp.series(                               // паралельно запускає
    gulp.parallel('watch', 'build', 'browserSync')
));
