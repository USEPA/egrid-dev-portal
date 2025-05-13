const gulp = require('gulp');
const replace = require('gulp-replace'); 
const uswds = require('@uswds/compile');

// USWDS version
uswds.settings.version = 3;

// Path settings
uswds.paths.dist.css = './src/assets/css';
uswds.paths.dist.theme = './src/styles/uswds';
uswds.paths.dist.fonts = './dist/fonts/sadjasdlk'; 


gulp.task('adjust-font-paths', function () {
  return gulp.src('./src/assets/css/uswds.min.css') 
    // Adjust font paths
    .pipe(replace(/url\(\s*['"]?\/fonts/g, "url('/power-sector-dev-portal/fonts"))
    .pipe(replace(/url\(\s*['"]?\/img/g, "url('/power-sector-dev-portal/img"))
    .pipe(gulp.dest('./dist/css')); 
});

// Export tasks
exports.init = uswds.init;
exports.compile = gulp.series(uswds.compile, 'adjust-css-paths'); 
exports.watch = uswds.watch;
