const gulp = require('gulp')
const series = gulp.series
const sass = require('gulp-sass')
const uglyfycss = require('gulp-uglifycss')
const concat = require('gulp-concat')


function transformarCss() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglyfycss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function enviarhmtl(){
    return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'))
}
exports.default = series(transformarCss,enviarhmtl)