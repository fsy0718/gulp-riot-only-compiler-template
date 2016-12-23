const gulp = require('gulp');
const tmpl = require('./index');

gulp.task('test', function(){
    return gulp.src('./src/*.tag')
        .pipe(tmpl())
        .pipe(gulp.dest('dist'));
})