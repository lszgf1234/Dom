import apply from './apply';
import common from './common';
var enumsObj = $.extend({},
    apply,
    common
);
//做成枚举对象
window.enums = [];
for (var key1 in enumsObj) {
    var arr = [];
    for (var i = 0; i < enumsObj[key1].length; i++) {
        arr[enumsObj[key1][i]['key']] = enumsObj[key1][i];
    }
    window.enums[key1] = arr;
}
enums.applyTypes.system.
//export default enums;
