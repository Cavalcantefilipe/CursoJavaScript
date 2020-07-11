const gulp = require('gulp')
const series = gulp.series
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transfomacaoTS() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transfomacaoTS)