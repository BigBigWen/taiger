var gulp = require('gulp'),
	connect = require('gulp-connect');
// 把 html 文件解析成Js 文件
var jst = require('gulp-cmd-jst');
gulp.task('jst', function() {
    gulp.src('static/view/*.html')
        .pipe(jst(
            {
                templateSettings: {
                  evaluate: /##([\s\S]+?)##/g,
                  interpolate: /\{\{(.+?)\}\}/g,
                  escape: /\{\{\{\{-([\s\S]+?)\}\}\}\}/g
                },
                //filter escape character 
                processContent: function(src) {
                  return src.replace(/(^\s+|\s+$)/gm, '');
                },
                //compress Jst 
                prettify: false, 
                //cmd: true || amd: true         
                cmd: true
            }
        ))
        .pipe(gulp.dest('static/view/'));
});
gulp.task('localhost',function(){
	return connect.server({
        root:'./',
        port:8090
    })
});
gulp.task('myWatch',function(){
        gulp.watch(['static/view/*.html'],['jst']);
       // gulp.watch(['mofang/config/*.js','mofang/controller/*.js'],['js']);
        // gulp.watch(['app/*.css','app/*.js'],['build']);
    });


gulp.task('default',['myWatch','localhost']);
