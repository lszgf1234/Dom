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

//完成打包压缩

/*依赖*/
var rimraf = require('rimraf');
var glob = require('glob');
//webpack配置文件 编译压缩js
var webpackConf = require('./conf/webpack.config.js');
//配置
//不参与压缩的文件目录
var staticDir = ['src/lib', 'src/img', 'src/fonts'];
//配置项
var knowOptions = {
    string: 'env',
    default: {
        env: process.env.NODE_ENV || 'development'
    }
};


/*目录清空文件*/
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

/*移动引入的文件（不参与压缩的）*/
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

//编译压缩文件
//js
gulp.task('compile:js', function (callback) {
    var entry = {};
    glob.sync("src/js/page/**/*.js").map(function (file) {
        entry[file.replace('src', 'build')] = require('path').join(__dirname, file);
    });

    //开发这模式不压缩
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
//监听文件
gulp.task('watch', function () {
    //gulp.watch(['src/css/**/*.styl', 'src/css/**/*.css'], ['compile:stylus']);
    gulp.watch(staticDir, ['mv']);
    gulp.watch(['/view/**/*.*'], ['compile:js']);
});


gulp.task('dev', gulpSequence('clean', 'mv', [ 'compile:js'], 'watch'));
gulp.task('iMerge', gulpSequence('clean', 'mv', ['compile:stylus', 'compile:js'], 'IMerge'));
gulp.task('build:test', gulpSequence('clean', 'mv', ['compile:stylus', 'compile:js'], 'IMerge', 'hash', 'rev', 'header_footer'));