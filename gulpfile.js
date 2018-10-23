var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var imageminMozjpeg = require('imagemin-mozjpeg');

const server = browserSync.create();


// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
    gulp.watch("./dev/scss/**/*.scss", gulp.series('sass'));
    gulp.watch("./dev/js/**/*.js", gulp.series('scripts'));
    gulp.watch("./dev/pug/**/*.pug", gulp.series('pug'));
    gulp.watch("./dev/img/**/*.*", gulp.series('image'));

    gulp.watch("./public/js/*.js").on('change', browserSync.reload);
    gulp.watch("./public/*.html").on('change', browserSync.reload);
    gulp.watch("./public/img/*.*").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./dev/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./public/css"))
        .pipe(browserSync.stream());
});

// Compile pug into html
gulp.task('pug', function(){
  return gulp.src('./dev/pug/pages/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('scripts', function() {
  return gulp.src('./dev/js/*.js')
    .pipe(concat('scripts.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./public/js/'))
});

gulp.task('image', () =>
    gulp.src('./dev/img/*')
        .pipe(imagemin([
          imageminMozjpeg({
                quality: 75
            })
        ]))
        .pipe(gulp.dest('./public/img/'))
);

gulp.task('default', gulp.series('serve'));
