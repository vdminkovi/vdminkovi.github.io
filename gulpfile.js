'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', defaultTask);


gulp.task('sass', function () {
	return gulp.src('src/style/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./src/style/stylesheets'));
});

//gulp.task('sass:watch', function () {
//	gulp.watch('./sass/**/*.scss', ['sass']);

//});

function defaultTask(done) {
	gulp.watch('src/style/sass/**/*.scss', ['sass']);
	done();
}