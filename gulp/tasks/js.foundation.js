'use strict';

module.exports = function() {
  $.gulp.task('js.foundation', function() {
    return $.gulp.src($.path.foundation)
      .pipe($.gp.concat('foundation.js'))
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
