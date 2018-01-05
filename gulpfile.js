/**
 * Created by Administrator on 2017/12/19.
 */
var gulp = require('gulp');
//����ѩ��ͼ�ϳɲ��
var spritesmith = require('gulp.spritesmith');
gulp.task('default', function () {
    return gulp.src('img/*.png')
        .pipe(spritesmith({
            imgName: 'images/sprite.png',    //����ϲ��������
            cssName: 'css/sprite.css',       //����ϲ���css��ʽ�ĵ�ַ
            padding: 2,                      //�ϲ�ʱ����ͼƬ�ļ��
            algorithm: 'binary-tree',        //ע��1
            //cssTemplate:'css/handlebarsStr.css'    //ע��2
            cssTemplate: function (data) {     //����Ǻ����Ļ������������д
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
        .pipe(gulp.dest('dest/'));   //���Ŀ¼
});