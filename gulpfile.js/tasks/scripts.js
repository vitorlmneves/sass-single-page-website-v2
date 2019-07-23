// dependencies --------------------

// dependencies: gulp
const gulp = require('gulp');

// dependencies: scripts
const uglify 	= require('gulp-uglify'),
      sourcemaps = require('gulp-sourcemaps');

// dependencies: utils
const plumber = require('gulp-plumber'),
      rename = require('gulp-rename'),
      notify = require('gulp-notify'),
      gulpif = require('gulp-if');



// tasks --------------------

// tasks: scripts
gulp.task('scripts', () => {
  console.log(' -> "scripts" task running...');

  return gulp
    .src(`${global.var.scripts.src}`)
    // .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(gulpif(global.var.flag.dev, sourcemaps.init()))
    .pipe(gulpif(global.var.flag.dev, sourcemaps.write()))
    // .pipe(gulpif(global.var.flag.dev == false, rename({suffix: '.min'})))
    .pipe(gulpif(!global.var.flag.dev, uglify()))
    .pipe(gulp.dest(`${global.var.scripts.dest}`))
    .pipe(notify({
      title: 'Success',
      message: `Scripts generated successfully`,
      type: 'info'
    }))
    .pipe(gulpif(browserSync.active, browserSync.stream()))
});
