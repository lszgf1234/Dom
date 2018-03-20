var glob = require('glob');
var path = require("path");
function getEntry(globPath, pathDir) {
    var files = glob.sync(globPath);
    var entries = {},
        entry, dirname, basename, pathname, extname;

    for (var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        extname = path.extname(entry);
        basename = path.basename(entry, extname);
        pathname = path.join(dirname, basename);
        pathname = pathDir ? pathname.replace(pathDir, '') : pathname;
        console.log(2, pathname, entry);
        entries[pathname] = './' + entry;
    }
    return entries;
}
//我们的key不是简单用的上一个代码的index,login而是用的index/index,login/login因为考虑在login目录下面还有register
//文件路径的\\和/跟操作系统也有关系，需要注意
var htmls = getEntry('./view/**/*.html', 'view\\');
console.log(htmls);
var entries = {};
var HtmlPlugin = [];
for (var key in htmls) {
    entries[key] = htmls[key].replace('.html', '.js')
    HtmlPlugin.push(new HtmlWebpackPlugin({
        filename: (key == 'index\\index' ? 'index.html' : key + '.html'),
        template: htmls[key],
        inject: true,
        chunks: [key]
    }))
}
module.exports = {
    entry: {
        'index': './src/view/index/index.js',
        'login': './src/view/login/login.js',
    },

    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/view/index/index.html',
        inject: true,
        chunks: ['index']
    }),
    new HtmlWebpackPlugin({
        filename: 'login/login.html', //http访问路径
        template: './src/view/login/login.html', //实际文件路径
        inject: true,
        chunks: ['login']
    })