var gutil, through, ref$, compile;
gutil = require('gulp-util');
through = require('through2');
ref$ = require('riot-compiler'), compile = ref$.html;

module.exports = function (opts) {
  var transform;
  opts == null && (opts = {});
  var _opts = opts.opts || {};
  transform = function (file, encoding, callback) {
    var compiledCode, err, splitedPath;
    switch (false) {
      case !file.isNull():
        return callback(null, file);
      case !file.isStream():
        return callback(new gutil.PluginError('gulp-riot-only-compiler-template', 'Stream not supported'));
      default:

      try {
        compiledCode = compile(file.contents.toString(), _opts);

      } catch (e$) {
        err = e$;
        return callback(new gutil.PluginError('gulp-riot-only-compiler-template', file.path + ": Compiler Error: " + err));
      }
        file.contents = new Buffer(compiledCode);
        splitedPath = file.path.split('.');
        splitedPath[splitedPath.length - 1] = opts.extname || 'tag';
        file.path = splitedPath.join('.');
        return callback(null, file);
    }
  };
  return through.obj(transform);
}