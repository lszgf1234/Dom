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

//��ɴ��ѹ��

/*����*/
var rimraf = require('rimraf');
var glob = require('glob');
//webpack�����ļ� ����ѹ��js
var webpackConf = require('./conf/webpack.config.js');
//����
//������ѹ�����ļ�Ŀ¼
var staticDir = ['src/lib', 'src/img', 'src/fonts'];
//������
var knowOptions = {
    string: 'env',
    default: {
        env: process.env.NODE_ENV || 'development'
    }
};


/*Ŀ¼����ļ�*/
gulp.task('clean', function () {
    return Promise.all(
        ['build', 'dist'].map(function (dir) {
            return new Promise(function (resolve, reject) {
                rimraf(dir, function (err) {
                    if (err) {
                        reject();
                    } else {
                        resolve();
                    }
                });
            });
        }));
});

/*�ƶ�������ļ���������ѹ���ģ�*/
gulp.task('mv', function () {
    return Promise.all(
        staticDir.map(function (dir) {
            return new Promise(function (resolve, reject) {
                gulp.src(dir + '/**/*.*')
                    .pipe(gulp.dest('build/' + dir.substring(4)))
                    .on('end', resolve)
                    .on('error', reject);
            })
        })
    )
});

//����ѹ���ļ�
//js
gulp.task('compile:js', function (callback) {
    var entry = {};
    glob.sync("src/js/page/**/*.js").map(function (file) {
        entry[file.replace('src', 'build')] = require('path').join(__dirname, file);
    });

    //������ģʽ��ѹ��
    if(knowOptions.default.env == 'development'){
        webpackConf.plugins.shift();
    }

    var config = Object.assign({}, webpackConf, {
        entry : entry,
        output: {
            path    : __dirname,
            filename: '[name]'
        }
        //watch : isProduction
    });
    var flag = true;
    webpack(config, function (err, stat) {
        if (err) {
            console.log(err);
            flag && callback();
            return flag = false;
        }
        console.log(stat.toString({
            chunks: false,
            colors: true
        }));
        var jsonStat = stat.toJson();
        if (jsonStat.errors.length > 0) {
            var errorMessage = jsonStat.errors.reduce(function (resultMessage, nextError) {
                resultMessage += nextError.toString();
                return resultMessage;
            }, '');
            console.log(errorMessage)
        }
        flag && callback();
        return flag = false;
    });
});
//�����ļ�
gulp.task('watch', function () {
    //gulp.watch(['src/css/**/*.styl', 'src/css/**/*.css'], ['compile:stylus']);
    gulp.watch(staticDir, ['mv']);
    gulp.watch(['/view/**/*.*'], ['compile:js']);
});


gulp.task('dev', gulpSequence('clean', 'mv', [ 'compile:js'], 'watch'));
gulp.task('iMerge', gulpSequence('clean', 'mv', ['compile:stylus', 'compile:js'], 'IMerge'));
gulp.task('build:test', gulpSequence('clean', 'mv', ['compile:stylus', 'compile:js'], 'IMerge', 'hash', 'rev', 'header_footer'));