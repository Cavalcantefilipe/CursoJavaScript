const gulp = require('gulp')
const series = gulp.series
const parallel = gulp.parallel


const { appHTML, appCSS, appJS, appIMG } = require('./gulpTask/app')
const { depsCSS, depsFonts } = require('./gulpTask/deps')
const { monitorarArquivos, servidor } = require('./gulpTask/servidor')

module.exports.default = series(
    parallel(
        series(appHTML,appCSS,appJS,appIMG),
        series(depsCSS,depsFonts)
    ),
    servidor,
    monitorarArquivos
)