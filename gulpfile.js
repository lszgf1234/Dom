/**
 * Created by Administrator on 2017/12/19.
 */
var gulp = require('gulp');
//引入雪碧图合成插件
var spritesmith = require('gulp.spritesmith');
gulp.task('default', function () {
    return gulp.src('img/*.png')
        .pipe(spritesmith({
            imgName: 'images/sprite.png',    //保存合并后的名称
            cssName: 'css/sprite.css',       //保存合并后css样式的地址
            padding: 2,                      //合并时两个图片的间距
            algorithm: 'binary-tree',        //注释1
            //cssTemplate:'css/handlebarsStr.css'    //注释2
            cssTemplate: function (data) {     //如果是函数的话，这可以这样写
                var arr = [];
                data.sprites.forEach(function (sprite) {
                    arr.push(".icon-" + sprite.name +
                    "{" +
                    "background-image: url('" + sprite.escaped_image + "');" +
                    "background-repeat: no-repeat;" +
                    "background-position: " + sprite.px.offset_x + " " + sprite.px.offset_y + ";" +
                    "background-size: " + sprite.px.width + " " + sprite.px.height + ";" +
                    "width: " + sprite.px.width + ";" +
                    "height: " + sprite.px.height + ";" +
                    "}\n");
                });
                return arr.join("");
            }
        }))
        .pipe(gulp.dest('dest/'));   //输出目录
});