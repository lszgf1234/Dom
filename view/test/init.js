/**
 * Created by lishuai on 2017/3/27.
 */
var str = '56789gfd_' ;
//必须有数字，必须有字母，必须有下划线
var reg =/([0-9]+)([A-Za-z]+)([_]+)/.test('1a_') ;
//特殊字符
var reg1 = /([\@\#\$\%\^\&\*\(\)\{\}\:\"\<\>\?\[\]])/.test('a[');
