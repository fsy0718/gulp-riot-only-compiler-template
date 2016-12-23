#项目起因
riot3.0后可以通过`extend riot.Tag`来生成新的组件，新的构造函数中有`get tmpl()`来提供新组件所需的模板，但这个模板必须符合[riot.tag](http://riotjs.com/api/#manual-construction)的一系列规范，额外增加理解成本。
使用`gulp-riot-only-compiler-template`可以将tag文件转换成符合riot.tag标准的模板

#使用方式
```nodejs
npm install --save-dev gulp-riot-only-compiler-template
```

```js
var gulp = require('gulp);
var riotTmpl = require('gulp-riot-only-compiler-template');
gulp.task('riotTmpl', function(){
    gulp.src('./*.tag')
    .pipe(riotTmpl({
        //opts: opts,
        //extname: 'tag'
    }))
    .pipe(gulp.dest('./output'))
});
```

#参数说明
* `opts`为`riot.compiler`所需参数
* `extname`为转换后文件的扩展名

