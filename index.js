var gutil, through, ref$, compile, parsers;
gutil = require('gulp-util');
through = require('through2');
ref$ = require('riot'), compile = ref$.compile, parsers = ref$.parsers;

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
        if (_opts.parsers != null) {
        Object.keys(_opts.parsers).forEach(function(x){
          return Object.keys(_opts.parsers[x]).forEach(function(y){
            return parsers[x][y] = _opts.parsers[x][y];
          });
        });
        delete _opts.parsers;
      }
      try {
        compiledCode = compile(file.contents.toString(), _opts, file.path);
        var _tmpl = compiledCode.split("'")[3];
      } catch (e$) {
        err = e$;
        return callback(new gutil.PluginError('gulp-riot-only-compiler-template', file.path + ": Compiler Error: " + err));
      }
        file.contents = new Buffer(_tmpl);
        splitedPath = file.path.split('.');
        splitedPath[splitedPath.length - 1] = opts.extname || 'tag';
        file.path = splitedPath.join('.');
        return callback(null, file);
    }
  };
  return through.obj(transform);
}