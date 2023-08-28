// Ts Config

const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')


gulp.task('compile-ts', function () {
    return gulp.src('./tsFiles/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('./Js File'))
});

gulp.task('build', function () {
    gulp.watch('./tsFiles/*.ts', gulp.series('compile-ts'))
})


// Sass Config
const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('style.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask() {
    watch(['style.scss'], buildStyles)
}

exports.default = series(buildStyles, "compile-ts", watchTask)
